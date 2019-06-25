import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JobsForm from '../JobsForm';
import { addJob } from '../JobsForm/actions';

const JobsList = ({ addJob, currentUser }) => {
  const handleSubmit = values => addJob(values);
  const { provider } = currentUser;

  return (
    <div>
      <h1>Jobs List</h1>
      {provider === 'google.com' && (
        <JobsForm currentUser={currentUser} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => bindActionCreators({ addJob }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsList);
