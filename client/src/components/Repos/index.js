import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepos } from '../../actions/repos';

const propTypes = {
  fetchRepos: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  reposLoaded: PropTypes.bool.isRequired
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

const Repos = ({ fetchRepos, id, repos, reposLoaded }) => {
  useEffect(() => {
    if (!reposLoaded) {
      fetchRepos(id);
    }
  }, [fetchRepos, id, reposLoaded]);

  return (
    <div>
      <h3>Recent Projects</h3>
      {renderRepos(repos)}
    </div>
  );
};

const mapStateToProps = state => ({
  repos: state.repos.repos,
  reposLoaded: state.repos.reposLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchRepos }, dispatch);

Repos.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
