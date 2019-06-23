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
    image: null,
    name: null,
    profile: null,
    repos: [],
    student: {},
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
        name: null,
        profile: null,
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
        image: payload.image,
        name: payload.name,
        profile: payload.profile,
        repos: payload.repos,
        studentLoaded: true
      };
    default:
      return state;
  }
}
