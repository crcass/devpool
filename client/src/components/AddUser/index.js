import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddUserForm from './AddUserForm';
import { addStudent } from '../../actions/students';
import { addUser } from '../../actions/user';
import PersonContainer from '../../shared/PersonContainer';

const AddUser = ({ addStudent, addUser, currentUser, history }) => {
  const handleSubmit = values =>
    values.github ? addStudent(values, history) : addUser(values, history);

  return (
    <PersonContainer account>
      <h1>Welcome {currentUser.name}!</h1>
      <img src={currentUser.image} alt={currentUser.name} />
      <p>We just need a bit more info</p>
      <AddUserForm onSubmit={handleSubmit} />
    </PersonContainer>
  );
};

const mapStateToProps = state => ({ currentUser: state.auth.currentUser });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addStudent, addUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
