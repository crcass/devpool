import {
  LOGIN_COMPLETE,
  LOGOUT_COMPLETE,
  STUDENT_UPDATED,
  USER_LOGIN,
  USER_UPDATED
} from '../actions';

const initialState = {
  currentUser: null,
  loggedIn: false,
  loggingIn: false
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case LOGIN_COMPLETE:
      return {
        ...state,
        currentUser: payload,
        loggedIn: true,
        loggingIn: false
      };
    case LOGOUT_COMPLETE:
      return { ...state, currentUser: null, loggedIn: false };
    case STUDENT_UPDATED:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          linkedin: payload.linkedin,
          portfolio: payload.portfolio
        }
      };
    case USER_LOGIN:
      return { ...state, loggingIn: true };
    case USER_UPDATED:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          company: payload.company,
          linkedin: payload.linkedin
        }
      };
    default:
      return state;
  }
}
