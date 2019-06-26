import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepos, resetStudent } from './actions';
import { addComment, fetchComments } from '../Comments/actions';
import Comments from '../Comments';
import CommentForm from '../CommentForm';
import Repos from '../../components/Repos';
import { titleCase } from '../../helpers';

const propTypes = {
  addComment: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  commentsLoaded: PropTypes.bool.isRequired,
  fetchComments: PropTypes.func.isRequired,
  fetchRepos: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  }).isRequired,
  resetStudent: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  reposLoaded: PropTypes.bool.isRequired
};

const renderStudent = (students, route) =>
  students
    .filter(student => student.github === route)
    .map(student => (
      <div key={student.github}>
        <h2>{titleCase(student.name)}</h2>
        <img src={student.image} alt={student.name} />
        <a href={student.githubLink} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={student.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={student.portfolio} target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </div>
    ));

const StudentDetail = ({
  addComment,
  author,
  commentsLoaded,
  fetchComments,
  fetchRepos,
  match,
  resetStudent,
  repos,
  students,
  reposLoaded
}) => {
  useEffect(() => {
    const { id } = match.params;
    fetchComments(id, author);
    fetchRepos(id);
    return () => resetStudent();
  }, [author, match.params, fetchComments, fetchRepos, resetStudent]);

  const handleSubmit = values => {
    const user = match.params.id;
    addComment(values, user, author);
  };

  return (
    <div>
      {renderStudent(students, match.params.id)}
      {commentsLoaded && <Comments />}
      {commentsLoaded && (
        <CommentForm author={author} onSubmit={handleSubmit} />
      )}
      {reposLoaded && <Repos repos={repos} />}
    </div>
  );
};

const mapStateToProps = state => ({
  author: state.auth.currentUser.uid,
  commentsLoaded: state.comments.commentsLoaded,
  repos: state.repos.repos,
  reposLoaded: state.repos.reposLoaded,
  students: state.students.students
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addComment, fetchComments, fetchRepos, resetStudent },
    dispatch
  );

StudentDetail.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
