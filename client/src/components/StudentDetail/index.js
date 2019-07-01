import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepos } from '../../actions/repos';
import { resetStudent } from '../../actions/students';
import Comments from '../Comments';
import Repos from '../Repos';
import { titleCase } from '../../helpers';
import PersonContainer from '../../shared/PersonContainer';
import StudentLinks from '../../shared/StudentLinks';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  }).isRequired,
  resetStudent: PropTypes.func.isRequired
};

const renderStudent = (students, route) =>
  students
    .filter(student => student.github === route)
    .map(student => (
      <PersonContainer key={student.github}>
        <h2>{titleCase(student.name)}</h2>
        <img src={student.image} alt={student.name} />
        <StudentLinks
          githubLink={student.githubLink}
          linkedin={student.linkedin}
          portfolio={student.portfolio}
        />
      </PersonContainer>
    ));

const StudentDetail = ({ match, resetStudent, students }) => {
  useEffect(() => () => resetStudent(), [resetStudent]);

  return (
    <div>
      {renderStudent(students, match.params.id)}
      <Comments id={match.params.id} />
      <Repos id={match.params.id} />
    </div>
  );
};

const mapStateToProps = state => ({
  students: state.students.students
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchRepos, resetStudent }, dispatch);

StudentDetail.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
