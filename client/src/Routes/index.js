import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from '../modules/StudentList';
import StudentDetail from '../modules/StudentDetail';
import NotFound from '../components/NotFound';
import Login from '../Login';

const Routes = () => (
  <Router>
    <Login />
    <Switch>
      <Route exact path="/" component={StudentList} />
      <Route path="/students/:id" component={StudentDetail} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
