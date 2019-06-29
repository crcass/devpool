import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../components/About';
import AddUser from '../components/AddUser';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import ProfileDetail from '../components/ProfileDetail';
import PrivateRoute from './PrivateRoute';

const Routes = ({ currentUser, loggedIn }) => (
  <Router>
    <Header currentUser={currentUser} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about/" component={About} />
      {!currentUser && <Route exact path="/login/" component={Login} />}
      {currentUser && !loggedIn && (
        <Route exact path="/adduser/" component={AddUser} />
      )}
      {currentUser && (
        <Route exact path="/account/" component={ProfileDetail} />
      )}
      <PrivateRoute component={Dashboard} currentUser={currentUser} />
      <Route component={NotFound} />
    </Switch>
    <Footer currentUser={currentUser} />
  </Router>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(Routes);
