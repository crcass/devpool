import { LOGIN_COMPLETE, LOGOUT_COMPLETE, USER_LOGIN } from '../actions';

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
    case USER_LOGIN:
      return { ...state, loggingIn: true };
    case LOGOUT_COMPLETE:
      return { ...state, currentUser: null, loggedIn: false };
    default:
      return state;
  }
}
