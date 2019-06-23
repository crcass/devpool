import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStudents } from './actions';
import Student from '../../components/Student';

const renderStudents = students =>
  students.map(student => (
    <Student
      key={student.id}
      github={student.github}
      githubLink={student.githubLink}
      linkedin={student.linkedin}
      image={student.image}
      name={student.name}
      portfolio={student.portfolio}
    />
  ));

const propTypes = {
  fetchStudents: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  students: PropTypes.array.isRequired
};

const StudentList = ({ fetchStudents, isLoaded, students }) => {
  useEffect(() => {
    if (!isLoaded) {
      fetchStudents();
    }
  }, [isLoaded, fetchStudents]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Fragment>
      <h1>Student List</h1>
      {renderStudents(students)}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  students: state.students.students,
  isLoaded: state.students.studentsLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchStudents }, dispatch);

StudentList.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);
