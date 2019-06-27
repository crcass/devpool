import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentForm from './CommentForm';
import {
  addComment,
  fetchComments,
  removeComment
} from '../../actions/comments';

const propTypes = {
  addComment: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  fetchComments: PropTypes.func.isRequired,
  id: PropTypes.string,
  isLoaded: PropTypes.bool.isRequired,
  removeComment: PropTypes.func.isRequired,
  user: PropTypes.string
};

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

const Comments = ({
  addComment,
  author,
  comments,
  currentUser,
  fetchComments,
  id,
  isLoaded,
  removeComment,
  user
}) => {
  useEffect(() => {
    if (!isLoaded && !id) {
      currentUser.provider === 'google.com'
        ? fetchComments(user, author)
        : fetchComments(user);
    }
  }, [author, currentUser.provider, id, fetchComments, isLoaded, user]);

  useEffect(() => {
    if (id) {
      fetchComments(id, author);
    }
  }, [author, id, fetchComments]);

  const handleSubmit = values => {
    addComment(values, user, author);
  };

  return (
    <div>
      <h3>Comments</h3>
      {renderComments(comments, removeComment)}
      {currentUser.provider === 'google.com' && (
        <CommentForm currentUser={currentUser} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  author: state.auth.currentUser.uid,
  comments: state.comments.comments,
  currentUser: state.auth.currentUser,
  isLoaded: state.comments.commentsLoaded,
  user: state.auth.currentUser.username
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addComment, fetchComments, removeComment }, dispatch);

Comments.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
