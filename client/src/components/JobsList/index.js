import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Job from '../Job';
import JobsForm from '../JobsForm';
import Container from '../../shared/Container';
import FlexContainer from '../../shared/FlexContainer';
import { addJob, fetchJobs } from '../../actions/jobs';

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
      route={`/jobs/${job.id}`}
      title={job.title}
      website={job.website}
    />
  ));

const JobsList = ({
  addJob,
  currentUser,
  fetchJobs,
  isLoaded,
  jobs,
  location
}) => {
  useEffect(() => {
    if (!isLoaded) {
      currentUser.provider === 'google.com'
        ? fetchJobs(currentUser.uid)
        : fetchJobs();
    }
  }, [currentUser.provider, currentUser.uid, fetchJobs, isLoaded]);

  const handleSubmit = values => addJob(values);
  const { provider } = currentUser;

  return (
    <section>
      <Container>
        <h1>Jobs</h1>
        <FlexContainer>
          {renderJobs(jobs)}
          {provider === 'google.com' &&
            location.pathname !== '/dashboard/jobs' && (
              <JobsForm currentUser={currentUser} onSubmit={handleSubmit} />
            )}
        </FlexContainer>
      </Container>
    </section>
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
