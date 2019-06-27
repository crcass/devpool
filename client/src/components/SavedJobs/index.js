import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Job from '../Job';
import { fetchSavedJobs } from '../../actions/savedJobs';

const propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired
  }).isRequired,
  fetchSavedJobs: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  jobs: PropTypes.array
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
      route={`/savedJobs/${job.jobId}`}
      title={job.title}
      website={job.website}
    />
  ));

const SavedJobs = ({ currentUser, fetchSavedJobs, isLoaded, jobs }) => {
  useEffect(() => {
    if (!isLoaded) {
      fetchSavedJobs(currentUser.uid);
    }
  }, [currentUser.uid, fetchSavedJobs, isLoaded]);

  return (
    <div>
      <h1>Saved Jobs</h1>
      {renderJobs(jobs)}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  isLoaded: state.savedJobs.savedJobsLoaded,
  jobs: state.savedJobs.savedJobs
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchSavedJobs }, dispatch);

SavedJobs.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedJobs);
