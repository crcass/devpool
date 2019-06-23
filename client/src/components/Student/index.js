import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  <div>
    <Link to={`/students/${github}`}>
      <h2>{titleCase(name)}</h2>
      <img src={image} alt={name} />
    </Link>
    <div>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href={portfolio} target="_blank" rel="noopener noreferrer">
        Portfolio
      </a>
    </div>
  </div>
);

Student.propTypes = propTypes;

export default Student;
