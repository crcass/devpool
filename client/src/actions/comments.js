import {
  ADD_COMMENT,
  COMMENT_ADDED,
  COMMENT_REMOVED,
  FETCH_COMMENTS,
  REMOVE_COMMENT
} from '.';

export const addComment = (payload, user, author) => ({
  type: ADD_COMMENT,
  payload,
  user,
  author
});

export const commentAdded = () => ({ type: COMMENT_ADDED });

export const commentRemoved = (payload, i) => ({
  type: COMMENT_REMOVED,
  payload,
  i
});

export const fetchComments = (id, author) => ({
  type: FETCH_COMMENTS,
  id,
  author
});

export const removeComment = (payload, i) => ({
  type: REMOVE_COMMENT,
  payload,
  i
});
