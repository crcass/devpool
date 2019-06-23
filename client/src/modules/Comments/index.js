import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeComment } from './actions';

const renderComments = (comments, removeComment) =>
  comments.map((comment, i) => (
    <div key={comment.id}>
      <p>{comment.comment}</p>
      {comment.link !== null && (
        <a href={comment.link} target="_blank" rel="noopener noreferrer">
          Click
        </a>
      )}
      <button onClick={() => removeComment(comment.id, i)}>&times;</button>
    </div>
  ));

const propTypes = {
  comments: PropTypes.array.isRequired,
  removeComment: PropTypes.func.isRequired
};

const Comments = ({ comments, removeComment }) => (
  <div>
    <h3>Comments</h3>
    {renderComments(comments, removeComment)}
  </div>
);

const mapStateToProps = state => ({
  comments: state.comments.comments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeComment }, dispatch);

Comments.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
