import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Nav from '../components/Nav';
import NotFound from '../components/NotFound';
import ProfileDetail from '../components/ProfileDetail';
import PrivateRoute from './PrivateRoute';

const Routes = ({ currentUser }) => (
  <Router>
    <Nav currentUser={currentUser} />
    <Switch>
      <Route exact path="/" component={Login} />
      {currentUser && (
        <Route exact path="/account/" component={ProfileDetail} />
      )}
      <PrivateRoute component={Dashboard} currentUser={currentUser} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Routes);
