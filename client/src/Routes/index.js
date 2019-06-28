import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Logout from '../components/Logout';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';
import ProfileDetail from '../components/ProfileDetail';
import PrivateRoute from './PrivateRoute';

const Routes = ({ currentUser }) => (
  <Router>
    <nav>
      {currentUser && <Link to="/account/">Account</Link>}
      This is a nav bar
      {currentUser && <Logout />}
    </nav>
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
