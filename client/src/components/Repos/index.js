import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepos } from '../../actions/repos';
import Container from '../../shared/Container';
import PersonContainer from '../../shared/PersonContainer';
import RepoContainer from './layout/RepoContainer';

const propTypes = {
  fetchRepos: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  reposLoaded: PropTypes.bool.isRequired
};

const renderRepos = repos => {
  return repos.map(repo => (
    <PersonContainer key={repo.id}>
      <RepoContainer>
        <h3>{repo.name}</h3>
        {repo.description !== null && <p>{repo.description}</p>}
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          View Repo on Github
        </a>
      </RepoContainer>
    </PersonContainer>
  ));
};

const Repos = ({ fetchRepos, id, repos, reposLoaded }) => {
  useEffect(() => {
    if (!reposLoaded) {
      fetchRepos(id);
    }
  }, [fetchRepos, id, reposLoaded]);

  return (
    <Container>
      <h2>Recent Projects</h2>
      {renderRepos(repos)}
    </Container>
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
