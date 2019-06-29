import { ADD_STUDENT, FETCH_STUDENTS, RESET_STUDENT, UPDATE_STUDENT } from '.';

export const addStudent = (payload, history) => ({
  type: ADD_STUDENT,
  payload,
  history
});

export const fetchStudents = () => ({ type: FETCH_STUDENTS });

export const resetStudent = () => ({ type: RESET_STUDENT });

export const updateStudent = payload => ({ type: UPDATE_STUDENT, payload });
