import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './CommentForm';
import {
  addComment,
  fetchComments,
  removeComment
} from '../../actions/comments';
import CommentContainer from './layout/CommentContainer';
import Container from '../../shared/Container';

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
    <CommentContainer key={comment.id}>
      <p>{comment.comment}</p>
      {comment.link !== null && (
        <a href={comment.link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      )}
      <button onClick={() => removeComment(comment.id, i)}>&times;</button>
    </CommentContainer>
  ));

const Comments = ({
  addComment,
  author,
  comments,
  currentUser,
  fetchComments,
  id,
  isLoaded,
  location,
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
    <section>
      <Container>
        <h1>Comments</h1>
        {renderComments(comments, removeComment)}
        {currentUser.provider === 'google.com' &&
          location.pathname !== '/dashboard/comments/' && (
            <CommentForm currentUser={currentUser} onSubmit={handleSubmit} />
          )}
      </Container>
    </section>
  );
};

const mapStateToProps = state => ({
  author: state.auth.currentUser.name,
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
)(withRouter(Comments));
