import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStudents } from '../../actions/students';
import Student from '../Student';
import Container from '../../shared/Container';
import FlexContainer from '../../shared/FlexContainer';

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
  currentUser: PropTypes.object.isRequired,
  fetchStudents: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  students: PropTypes.array.isRequired
};

const StudentList = ({ currentUser, fetchStudents, isLoaded, students }) => {
  useEffect(() => {
    if (!isLoaded) {
      fetchStudents();
    }
  }, [isLoaded, fetchStudents]);

  if (!isLoaded || !currentUser) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Container>
        <h1>Students</h1>
        <FlexContainer>{renderStudents(students)}</FlexContainer>
      </Container>
    </section>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
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
