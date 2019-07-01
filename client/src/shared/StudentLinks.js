import React from 'react';
import PropTypes from 'prop-types';
import LinkContainer from './LinkContainer';

const propTypes = {
  githubLink: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired
};

const StudentLinks = ({ githubLink, linkedin, portfolio }) => (
  <LinkContainer>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      Github
    </a>
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    <a href={portfolio} target="_blank" rel="noopener noreferrer">
      Portfolio
    </a>
  </LinkContainer>
);

StudentLinks.propTypes = propTypes;

export default StudentLinks;
