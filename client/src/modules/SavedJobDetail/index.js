import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteJob, saveJob } from './actions';

const propTypes = {
  currentUser: PropTypes.object.isRequired,
  savedJobs: PropTypes.array.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  }).isRequired
};

const renderJob = (currentUser, deleteJob, jobs, route, saved, saveJob) => {
  return jobs
    .filter(job => job.jobId === parseInt(route))
    .map(job => {
      return (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <h3>{job.company}</h3>
          <a
            href={job.website}
            target="_blank"
            rel="noopener noreferrer"
          >{`Visit ${job.company}'s Website`}</a>
          <img src={job.image} alt={job.company} />
          <p>{job.description}</p>
          <a href={job.link} target="_blank" rel="noopener noreferrer">
            Apply for this job
          </a>
          <button
            onClick={
              saved
                ? () => saveJob(job.id, currentUser.uid, job)
                : () => deleteJob(job.jobId, jobs.indexOf(job))
            }
          >
            {saved ? 'Save this Job' : String.fromCharCode(215)}
          </button>
        </div>
      );
    });
};

const JobDetail = ({
  currentUser,
  deleteJob,
  savedJobs,
  match,
  saved,
  saveJob
}) => (
  <div>
    <h1>Job Details</h1>
    {renderJob(
      currentUser,
      deleteJob,
      savedJobs,
      match.params.id,
      saved,
      saveJob
    )}
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  savedJobs: state.savedJobs.savedJobs
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteJob, saveJob }, dispatch);

JobDetail.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobDetail);
