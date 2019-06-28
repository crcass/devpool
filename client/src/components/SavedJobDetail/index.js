import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteJob } from '../../actions/savedJobs';

const propTypes = {
  deleteJob: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  }).isRequired,
  savedJobs: PropTypes.array.isRequired
};

const renderJob = (deleteJob, jobs, route) => {
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
          <button onClick={() => deleteJob(job.jobId, jobs.indexOf(job))}>
            Remove from Saved
          </button>
        </div>
      );
    });
};

const JobDetail = ({ deleteJob, savedJobs, match }) => (
  <div>
    <h1>Job Details</h1>
    {renderJob(deleteJob, savedJobs, match.params.id)}
  </div>
);

const mapStateToProps = state => ({
  savedJobs: state.savedJobs.savedJobs
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteJob }, dispatch);

JobDetail.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobDetail);
