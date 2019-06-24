import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin } from './auth/actions';

const Login = ({ currentUser, history, userLogin }) => (
  <button onClick={() => userLogin(history)}>Sign In With Google</button>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
