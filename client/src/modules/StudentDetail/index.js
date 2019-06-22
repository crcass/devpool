import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment, fetchStudent, resetStudent } from './actions';
import Comments from './layout/Comments';
import CommentForm from './layout/CommentForm';
import Repos from './layout/Repos';
import { titleCase } from '../../helpers';

const propTypes = {
  fetchStudent: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  }).isRequired,
  resetStudent: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired
};

const StudentDetail = ({
  addComment,
  comments,
  fetchStudent,
  isLoaded,
  match,
  resetStudent,
  student
}) => {
  useEffect(() => {
    const { id } = match.params;
    fetchStudent(id);
    return () => resetStudent();
  }, [match.params, fetchStudent, resetStudent]);

  useEffect(() => console.log(comments), [comments]);

  const submit = values => addComment(values);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Fragment>
      <h1>Student Detail</h1>
      <h2>{titleCase(student.name)}</h2>
      <img src={student.image} alt={student.name} />
      <a href={student.profile} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <Comments />
      <CommentForm onSubmit={submit} />
      <Repos repos={student.repos} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  comments: state.student.comments,
  isLoaded: state.student.studentLoaded,
  student: state.student
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addComment, fetchStudent, resetStudent }, dispatch);

StudentDetail.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
