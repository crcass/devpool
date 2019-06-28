import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const propTypes = {
  currentUser: PropTypes.object.isRequired
};

const ProfileDetail = ({ currentUser }) => (
  <div>
    <h1>My Account</h1>
    <h2>{currentUser.name}</h2>
    <img src={currentUser.image} alt={currentUser.name} />
  </div>
);

ProfileDetail.propTypes = propTypes;

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetail);
