export const FETCH_STUDENT = 'FETCH_STUDENT';
export const RESET_STUDENT = 'RESET_STUDENT';
export const STUDENT_RECEIVED = 'STUDENT_RECEIVED';

export const fetchStudent = payload => ({
  type: 'FETCH_STUDENT',
  payload
});

export const resetStudent = () => ({ type: 'RESET_STUDENT' });
