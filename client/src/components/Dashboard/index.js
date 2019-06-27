import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const propTypes = {};

const Dashboard = ({ currentUser }) => (
  <div>
    <h1>Dashboard</h1>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

Dashboard.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
