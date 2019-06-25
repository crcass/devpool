import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from './auth/actions';

const Logout = ({ logout }) => <button onClick={logout}>Logout</button>;

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Logout);