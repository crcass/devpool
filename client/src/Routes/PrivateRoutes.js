import React from 'react';
import { Route } from 'react-router-dom';
import StudentList from '../modules/StudentList';
import StudentDetail from '../modules/StudentDetail';
import Login from '../Login';
import NotFound from '../components/NotFound';

const studentRoutes = currentUser => [
  <Route
    key="studentList"
    exact
    path="/students/"
    component={props => <StudentList {...props} currentUser={currentUser} />}
  />,
  <Route
    key="studentDetail"
    path="/students/:id"
    component={props => <StudentDetail {...props} currentUser={currentUser} />}
  />
];

const PrivateRoutes = ({ currentUser, history }) => {
  if (!currentUser) {
    history.push('/');
    return <Route exact path="/" component={Login} />;
  }

  return currentUser.provider === 'google.com' ? (
    studentRoutes(currentUser)
  ) : (
    <NotFound />
  );
};

export default PrivateRoutes;
