import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from '../components/AddUser';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Login from '../components/Login';
import Nav from '../components/Nav';
import NotFound from '../components/NotFound';
import ProfileDetail from '../components/ProfileDetail';
import PrivateRoute from './PrivateRoute';

const Routes = ({ currentUser, loggedIn }) => (
  <Router>
    <Nav currentUser={currentUser} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login/" component={Login} />
      {currentUser && !loggedIn && (
        <Route exact path="/adduser/" component={AddUser} />
      )}
      {currentUser && (
        <Route exact path="/account/" component={ProfileDetail} />
      )}
      <PrivateRoute component={Dashboard} currentUser={currentUser} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(Routes);
