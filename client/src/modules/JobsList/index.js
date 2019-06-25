import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JobsForm from '../JobsForm';
import { addJob, fetchJobs } from './actions';

const JobsList = ({ addJob, currentUser, fetchJobs, isLoaded, jobs }) => {
  useEffect(() => {
    if (!isLoaded) {
      fetchJobs();
    }
  }, [fetchJobs, isLoaded]);

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
  currentUser: state.auth.currentUser,
  isLoaded: state.jobs.jobsLoaded,
  jobs: state.jobs.jobs
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addJob, fetchJobs }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsList);
