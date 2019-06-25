import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logout from '../Logout';
import NotFound from '../components/NotFound';
import Login from '../auth/Login';
import PrivateRoutes from './PrivateRoutes';

const Routes = ({ currentUser }) => {
  return (
    <Router>
      <nav>
        This is a nav bar
        {currentUser && <Logout />}
      </nav>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoutes currentUser={currentUser} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Routes);
