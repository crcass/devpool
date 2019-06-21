import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  repos: PropTypes.array.isRequired
};

const renderRepos = repos =>
  repos.map(repo => (
    <div key={repo.id}>
      <p>{repo.name}</p>
      <p>{repo.language}</p>
      <p>{repo.description}</p>
      <a href={repo.url}>View Repo on Github</a>
    </div>
  ));

const Repos = ({ repos }) => <div>{renderRepos(repos)}</div>;

Repos.propTypes = propTypes;

export default Repos;
