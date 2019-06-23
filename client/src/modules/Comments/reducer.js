import { COMMENT_ADDED, COMMENTS_RECEIVED, REMOVE_COMMENT } from './actions';
import { RESET_STUDENT } from '../StudentDetail/actions';

const initialState = {
  comments: [],
  commentsLoaded: false
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
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, i),
          ...state.comments.slice(i + 1)
        ]
      };
    case RESET_STUDENT:
      return {
        ...state,
        comments: [],
        commentsLoaded: false
      };
    default:
      return state;
  }
}
