import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const Student = ({ image, login, name }) => (
  <div>
    <Link to={`/students/${login}`}>
      <h2>I'm a student</h2>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </Link>
  </div>
);

Student.propTypes = propTypes;

export default Student;
