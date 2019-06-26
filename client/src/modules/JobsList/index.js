import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Job from '../../components/Job';
import JobsForm from '../JobsForm';
import { addJob, fetchJobs } from './actions';

const propTypes = {
  addJob: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired
  }).isRequired,
  fetchJobs: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  job: PropTypes.array
};

const renderJobs = jobs =>
  jobs.map(job => (
    <Job
      key={job.id}
      company={job.company}
      description={job.description}
      id={job.id}
      image={job.image}
      link={job.link}
      title={job.title}
      website={job.website}
    />
  ));

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
      {renderJobs(jobs)}
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

JobsList.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsList);
