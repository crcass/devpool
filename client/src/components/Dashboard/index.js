import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PrivateRoute from '../../Routes/PrivateRoute';
import Main from '../../shared/Main';
import SubNav from './layout/SubNav';
import { recruiterRoutes, studentRoutes } from '../../constants/routes';
import {
  addComment,
  fetchComments,
  removeComment
} from '../../actions/comments';
import { fetchSavedJobs } from '../../actions/savedJobs';
import { addJob, fetchJobs } from '../../actions/jobs';
import { fetchStudents } from '../../actions/students';

const propTypes = {
  author: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  commentsLoaded: PropTypes.bool.isRequired,
  currentUser: PropTypes.object.isRequired,
  fetchComments: PropTypes.func.isRequired,
  fetchJobs: PropTypes.func.isRequired,
  fetchSavedJobs: PropTypes.func.isRequired,
  fetchStudents: PropTypes.func.isRequired,
  jobs: PropTypes.array.isRequired,
  jobsLoaded: PropTypes.bool.isRequired,
  savedJobs: PropTypes.array.isRequired,
  savedJobsLoaded: PropTypes.bool.isRequired,
  studentsLoaded: PropTypes.bool.isRequired,
  user: PropTypes.string
};

const renderRoutes = (currentUser, routes) =>
  routes.map(route => {
    const { component, path } = route;
    return (
      <PrivateRoute
        key={path}
        exact
        path={path}
        component={component}
        currentUser={currentUser}
      />
    );
  });

const Dashboard = ({
  author,
  comments,
  commentsLoaded,
  currentUser,
  fetchComments,
  fetchJobs,
  fetchSavedJobs,
  fetchStudents,
  jobs,
  jobsLoaded,
  loggedIn,
  savedJobs,
  savedJobsLoaded,
  studentsLoaded,
  user
}) => {
  useEffect(() => {
    if (currentUser.provider === 'google.com' && !studentsLoaded) {
      fetchStudents();
    }
  }, [currentUser.provider, studentsLoaded, fetchStudents]);

  useEffect(() => {
    if (!jobsLoaded) {
      currentUser.provider === 'google.com'
        ? fetchJobs(currentUser.uid)
        : fetchJobs();
    }
  }, [currentUser.provider, currentUser.uid, fetchJobs, jobsLoaded]);

  useEffect(() => {
    if (!commentsLoaded) {
      currentUser.provider === 'google.com'
        ? fetchComments(user, author)
        : fetchComments(user);
    }
  }, [author, commentsLoaded, currentUser.provider, fetchComments, user]);

  useEffect(() => {
    if (currentUser.provider === 'github.com' && !savedJobsLoaded) {
      fetchSavedJobs(currentUser.uid);
    }
  }, [currentUser.provider, currentUser.uid, fetchSavedJobs, savedJobsLoaded]);

  return (
    <Main loggedIn={loggedIn}>
      <SubNav
        comments={comments}
        currentUser={currentUser}
        jobs={jobs}
        savedJobs={savedJobs}
      />
      {currentUser.provider === 'google.com'
        ? renderRoutes(currentUser, recruiterRoutes)
        : renderRoutes(currentUser, studentRoutes)}
    </Main>
  );
};

const mapStateToProps = state => ({
  author: state.auth.currentUser.name,
  comments: state.comments.comments,
  commentsLoaded: state.comments.commentsLoaded,
  currentUser: state.auth.currentUser,
  jobs: state.jobs.jobs,
  jobsLoaded: state.jobs.jobsLoaded,
  loggedIn: state.auth.loggedIn,
  savedJobs: state.savedJobs.savedJobs,
  savedJobsLoaded: state.savedJobs.savedJobsLoaded,
  students: state.students.students,
  studentsLoaded: state.students.studentsLoaded,
  user: state.auth.currentUser.username
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addComment,
      addJob,
      fetchComments,
      fetchJobs,
      fetchSavedJobs,
      fetchStudents,
      removeComment
    },
    dispatch
  );

Dashboard.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
