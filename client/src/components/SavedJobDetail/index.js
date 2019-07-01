import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteJob } from '../../actions/savedJobs';
import PersonContainer from '../../shared/PersonContainer';

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
        <PersonContainer key={job.id}>
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
        </PersonContainer>
      );
    });
};

const JobDetail = ({ deleteJob, savedJobs, match }) => (
  <div>{renderJob(deleteJob, savedJobs, match.params.id)}</div>
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
