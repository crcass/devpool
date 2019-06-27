import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteJob, saveJob } from '../../actions/savedJobs';

const propTypes = {
  currentUser: PropTypes.object.isRequired,
  jobs: PropTypes.array.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  }).isRequired
};

const renderJob = (currentUser, deleteJob, jobs, route, saved, saveJob) => {
  return jobs
    .filter(job => job.id === parseInt(route))
    .map(job => (
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
            onClick={
              !saved
                ? () => saveJob(job.id, currentUser.uid, job)
                : () => deleteJob(job.id)
            }
          >
            {!saved ? 'Save this Job' : String.fromCharCode(215)}
          </button>
        )}
      </div>
    ));
};

const JobDetail = ({ currentUser, deleteJob, jobs, match, saved, saveJob }) => (
  <div>
    <h1>Job Details</h1>
    {renderJob(currentUser, deleteJob, jobs, match.params.id, saved, saveJob)}
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  jobs: state.jobs.jobs
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteJob, saveJob }, dispatch);

JobDetail.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobDetail);
