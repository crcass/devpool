import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addComment,
  fetchComments,
  fetchStudent,
  resetStudent
} from './actions';
import Comments from './layout/Comments';
import CommentForm from './layout/CommentForm';
import Repos from '../../components/Repos';
import { titleCase } from '../../helpers';

const propTypes = {
  fetchStudent: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  }).isRequired,
  resetStudent: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
  studentLoaded: PropTypes.bool.isRequired
};

const StudentDetail = ({
  addComment,
  fetchComments,
  fetchStudent,
  studentLoaded,
  match,
  resetStudent,
  student
}) => {
  useEffect(() => {
    const { id } = match.params;
    fetchComments(id);
    fetchStudent(id);
    return () => resetStudent();
  }, [match.params, fetchComments, fetchStudent, resetStudent]);

  const submit = values => addComment(values, match.params.id);

  if (!studentLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Fragment>
      <h1>Student Detail</h1>
      <h2>{titleCase(student.name)}</h2>
      <img src={student.image} alt={student.name} />
      <a href={student.github} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a href={student.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href={student.portfolio} target="_blank" rel="noopener noreferrer">
        Portfolio
      </a>
      <Comments />
      <CommentForm onSubmit={submit} />
      <Repos repos={student.repos} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  studentLoaded: state.student.studentLoaded,
  student: state.student
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addComment, fetchComments, fetchStudent, resetStudent },
    dispatch
  );

StudentDetail.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
