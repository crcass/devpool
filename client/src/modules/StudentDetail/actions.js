export const ADD_COMMENT = 'ADD_COMMENT';
export const COMMENT_ADDED = 'COMMENT_ADDED';
export const COMMENTS_RECEIVED = 'COMMENTS_RECEIVED';
export const COMMENT_REMOVED = 'COMMENT_REMOVED';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_STUDENT = 'FETCH_STUDENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RESET_STUDENT = 'RESET_STUDENT';
export const STUDENT_RECEIVED = 'STUDENT_RECEIVED';

export const addComment = (payload, user) => ({
  type: ADD_COMMENT,
  payload,
  user
});

export const commentAdded = () => ({ type: COMMENT_ADDED });

export const commentRemoved = payload => ({ type: COMMENT_REMOVED, payload });

export const fetchComments = payload => ({ type: FETCH_COMMENTS, payload });

export const fetchStudent = payload => ({
  type: FETCH_STUDENT,
  payload
});

export const resetStudent = () => ({ type: RESET_STUDENT });

export const removeComment = (payload, i) => ({
  type: REMOVE_COMMENT,
  payload,
  i
});
