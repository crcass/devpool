import { FETCH_STUDENT, RESET_STUDENT, STUDENT_RECEIVED } from './actions';
// import { formatStudentAPIResults } from '../../helpers';

const initialState = {
  student: {
    student: {},
    studentLoaded: false,
    studentLoading: false
  }
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case FETCH_STUDENT:
      return { ...state, studentLoading: true };
    case RESET_STUDENT:
      return {
        ...state,
        student: {},
        studentLoaded: false,
        studentLoading: false
      };
    case STUDENT_RECEIVED:
      return {
        ...state,
        student: payload,
        studentLoaded: true,
        studentLoading: false
      };
    default:
      return state;
  }
}
