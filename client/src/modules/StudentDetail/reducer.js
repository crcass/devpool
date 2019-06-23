import {
  COMMENT_ADDED,
  COMMENTS_RECEIVED,
  RESET_STUDENT,
  REMOVE_COMMENT,
  STUDENT_RECEIVED
} from './actions';

const initialState = {
  student: {
    comments: [],
    commentsLoaded: false,
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
  const { i, payload, type } = action;
  switch (type) {
    case COMMENT_ADDED:
      return { ...state, comments: [...state.comments, payload] };
    case COMMENTS_RECEIVED:
      return {
        ...state,
        comments: payload,
        commentsLoaded: true
      };
    case RESET_STUDENT:
      return {
        ...state,
        comments: [],
        commentsLoaded: false,
        image: null,
        github: null,
        linkedin: null,
        name: null,
        portfolio: null,
        studentLoaded: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, i),
          ...state.comments.slice(i + 1)
        ]
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
