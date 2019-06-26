import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};

const Job = ({ company, description, id, image, link, title, website }) => (
  <div>
    <h2>{title}</h2>
    <h3>{company}</h3>
    {/* <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
    >{`Visit ${company}'s Website`}</a> */}
    <img src={image} alt={company} />
    {/* <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Apply for this job
    </a> */}
    <Link to={`/jobs/${id}`}>View Details</Link>
  </div>
);

Job.propTypes = propTypes;

export default Job;
