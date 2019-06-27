import { FETCH_STUDENTS, RESET_STUDENT } from '.';

export const fetchStudents = () => ({ type: FETCH_STUDENTS });

export const resetStudent = () => ({ type: RESET_STUDENT });
