import {
  ADD_COMMENT,
  FETCH_STUDENT,
  RESET_STUDENT,
  REMOVE_COMMENT,
  STUDENT_RECEIVED
} from './actions';

const initialState = {
  student: {
    comments: [],
    image: '',
    name: '',
    profile: '',
    repos: [],
    student: {},
    studentLoaded: false,
    studentLoading: false
  },
  form: {}
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, payload] };
    case FETCH_STUDENT:
      return { ...state, studentLoading: true };
    case RESET_STUDENT:
      return {
        ...state,
        image: null,
        name: null,
        profile: null,
        studentLoaded: false,
        studentLoading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, payload),
          ...state.comments.slice(payload + 1)
        ]
      };
    case STUDENT_RECEIVED:
      return {
        ...state,
        image: payload.image,
        name: payload.name,
        profile: payload.profile,
        repos: payload.repos,
        studentLoaded: true,
        studentLoading: false
      };
    default:
      return state;
  }
}
