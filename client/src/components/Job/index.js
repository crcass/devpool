import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};

const Job = ({ company, id, image, route, title }) => (
  <div>
    <h2>{title}</h2>
    <h3>{company}</h3>
    <img src={image} alt={company} />
    <Link to={route}>View Details</Link>
  </div>
);

Job.propTypes = propTypes;

export default Job;
