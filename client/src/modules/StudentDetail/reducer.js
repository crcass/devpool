import { RESET_STUDENT, REPOS_RECEIVED } from './actions';
import { LOGOUT_COMPLETE } from '../../auth/actions';

const initialState = {
  repos: {
    repos: [],
    reposLoaded: false
  },
  form: {}
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case LOGOUT_COMPLETE:
      return { ...state, ...initialState };
    case RESET_STUDENT:
      return {
        ...state,
        repos: [],
        reposLoaded: false
      };
    case REPOS_RECEIVED:
      return {
        ...state,
        ...payload,
        reposLoaded: true
      };
    default:
      return state;
  }
}
