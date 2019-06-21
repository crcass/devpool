import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { titleCase } from '../../helpers';

const propTypes = {
  image: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const Student = ({ image, github, name }) => (
  <div>
    <Link to={`/students/${github}`}>
      <h2>{titleCase(name)}</h2>
      <img src={image} alt={name} />
    </Link>
  </div>
);

Student.propTypes = propTypes;

export default Student;
