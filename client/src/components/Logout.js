import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/auth';

const propTypes = {
  logout: PropTypes.func.isRequired
};

const Logout = ({ logout }) => <button onClick={logout}>Logout</button>;

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

Logout.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(Logout);
