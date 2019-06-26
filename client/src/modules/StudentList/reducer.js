import { FETCH_STUDENTS, STUDENTS_RECEIVED } from './actions';
import { LOGOUT_COMPLETE } from '../../auth/actions';

const initialState = {
  students: [],
  studentsLoading: false,
  studentsLoaded: false
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case FETCH_STUDENTS:
      return { ...state, studentsLoading: true };
    case LOGOUT_COMPLETE:
      return { ...state, ...initialState };
    case STUDENTS_RECEIVED:
      return {
        ...state,
        students: payload,
        studentsLoaded: true,
        studentsLoading: false
      };
    default:
      return state;
  }
}
