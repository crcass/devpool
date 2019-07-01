import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProfileForm from './ProfileForm';
import { updateStudent } from '../../actions/students';
import { updateUser } from '../../actions/user';
import PersonContainer from '../../shared/PersonContainer';

const propTypes = {
  currentUser: PropTypes.object.isRequired
};

const ProfileDetail = ({ currentUser, updateStudent, updateUser }) => {
  const handleSubmit = values =>
    values.github ? updateStudent(values) : updateUser(values);

  return (
    <PersonContainer account>
      <h1>My Account</h1>
      <h2>{currentUser.name}</h2>
      {currentUser.company && <h3>{currentUser.company}</h3>}
      <img src={currentUser.image} alt={currentUser.name} />
      <h4>Update Info</h4>
      <ProfileForm onSubmit={handleSubmit} />
    </PersonContainer>
  );
};

ProfileDetail.propTypes = propTypes;

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateStudent, updateUser }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetail);
