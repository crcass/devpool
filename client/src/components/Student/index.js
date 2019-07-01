import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PersonContainer from '../../shared/PersonContainer';
import StudentLinks from '../../shared/StudentLinks';
import { titleCase } from '../../helpers';

const propTypes = {
  github: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired
};

const Student = ({ github, githubLink, linkedin, image, name, portfolio }) => (
  <PersonContainer>
    <Link to={`/students/${github}`}>
      <h2>{titleCase(name)}</h2>
      <img src={image} alt={name} />
    </Link>
    <StudentLinks
      githubLink={githubLink}
      linkedin={linkedin}
      portfolio={portfolio}
    />
  </PersonContainer>
);

Student.propTypes = propTypes;

export default Student;
