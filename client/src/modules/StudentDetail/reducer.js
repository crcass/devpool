import { RESET_STUDENT, STUDENT_RECEIVED } from './actions';

const initialState = {
  student: {
    github: null,
    linkedin: null,
    image: null,
    name: null,
    portfolio: null,
    repos: [],
    studentLoaded: false
  },
  form: {}
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case RESET_STUDENT:
      return {
        ...state,
        image: null,
        github: null,
        linkedin: null,
        name: null,
        portfolio: null,
        studentLoaded: false
      };
    case STUDENT_RECEIVED:
      return {
        ...state,
        ...payload,
        studentLoaded: true
      };
    default:
      return state;
  }
}
