export const ADD_COMMENT = 'ADD_COMMENT';
export const FETCH_STUDENT = 'FETCH_STUDENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RESET_STUDENT = 'RESET_STUDENT';
export const STUDENT_RECEIVED = 'STUDENT_RECEIVED';

export const addComment = payload => ({ type: ADD_COMMENT, payload });

export const fetchStudent = payload => ({
  type: FETCH_STUDENT,
  payload
});

export const resetStudent = () => ({ type: RESET_STUDENT });

export const removeComment = payload => ({ type: REMOVE_COMMENT, payload });
