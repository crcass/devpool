import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Comments from './Comments';
import { addComment } from '../actions';

const propTypes = {
  addComment: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};

const renderRepos = (addComment, repos) => {
  const submit = values => addComment(values);

  return repos.map(repo => (
    <div key={repo.id}>
      <p>{repo.name}</p>
      <p>{repo.language}</p>
      <p>{repo.description}</p>
      <a href={repo.url}>View Repo on Github</a>
      <Comments form={`form${repo.id}`} onSubmit={submit} />
    </div>
  ));
};

const Repos = ({ addComment, repos }) => (
  <div>{renderRepos(addComment, repos)}</div>
);

const mapStateToProps = state => ({
  comments: state.form.comment
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addComment }, dispatch);

Repos.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
