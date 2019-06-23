import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  repos: PropTypes.array.isRequired
};

const renderRepos = repos => {
  return repos.map(repo => (
    <div key={repo.id}>
      <p>{repo.name}</p>
      <p>{repo.language}</p>
      {repo.description !== null && <p>{repo.description}</p>}
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        View Repo on Github
      </a>
    </div>
  ));
};

const Repos = ({ repos }) => (
  <div>
    <h3>Recent Projects</h3>
    {renderRepos(repos)}
  </div>
);

Repos.propTypes = propTypes;

export default Repos;
