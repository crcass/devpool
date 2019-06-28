import { ADD_COMMENT, FETCH_COMMENTS, REMOVE_COMMENT } from '.';

export const addComment = (payload, user, author) => ({
  type: ADD_COMMENT,
  payload,
  user,
  author
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
