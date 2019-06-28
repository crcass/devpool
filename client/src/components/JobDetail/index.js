import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeJob } from '../../actions/jobs';
import { saveJob } from '../../actions/savedJobs';
import { isSaved } from '../../helpers';

const propTypes = {
  currentUser: PropTypes.object.isRequired,
  jobs: PropTypes.array.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  }).isRequired,
  removeJob: PropTypes.func.isRequired,
  saveJob: PropTypes.func.isRequired
};

const renderJob = (currentUser, jobs, removeJob, route, saveJob, savedJobs) =>
  jobs
    .filter(job => job.id === parseInt(route))
    .map(job => {
      const saved = isSaved(savedJobs, job);
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
          {currentUser.provider === 'github.com' && (
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              Apply for this job
            </a>
          )}
          {currentUser.provider === 'github.com' && (
            <button
              disabled={saved}
              onClick={() => saveJob(job.id, currentUser.uid, job)}
            >
              {!saved ? 'Save this Job' : 'Saved'}
            </button>
          )}
          {currentUser.provider === 'google.com' && (
            <button onClick={() => removeJob(job.id, jobs.indexOf(job))}>
              Delete This Job Posting
            </button>
          )}
        </div>
      );
    });

const JobDetail = ({
  currentUser,
  jobs,
  match,
  removeJob,
  saveJob,
  savedJobs
}) => (
  <div>
    <h1>Job Details</h1>
    {renderJob(
      currentUser,
      jobs,
      removeJob,
      match.params.id,
      saveJob,
      savedJobs
    )}
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  jobs: state.jobs.jobs,
  savedJobs: state.savedJobs.savedJobs
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeJob, saveJob }, dispatch);

JobDetail.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobDetail);
