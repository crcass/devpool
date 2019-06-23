export const ADD_COMMENT = 'ADD_COMMENT';
export const COMMENT_ADDED = 'COMMENT_ADDED';
export const COMMENTS_RECEIVED = 'COMMENTS_RECEIVED';
export const COMMENT_REMOVED = 'COMMENT_REMOVED';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const addComment = (payload, user) => ({
  type: ADD_COMMENT,
  payload,
  user
});

export const commentAdded = () => ({ type: COMMENT_ADDED });

export const commentRemoved = payload => ({ type: COMMENT_REMOVED, payload });
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
