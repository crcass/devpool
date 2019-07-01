import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PersonContainer from '../../shared/PersonContainer';
import LinkContainer from '../../shared/LinkContainer';

const propTypes = {
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const Job = ({ company, image, route, title }) => (
  <PersonContainer>
    <h2>{title}</h2>
    <h3>{company}</h3>
    <img src={image} alt={company} />
    <LinkContainer>
      <Link to={route}>Details</Link>
    </LinkContainer>
  </PersonContainer>
);

Job.propTypes = propTypes;

export default Job;
