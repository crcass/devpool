import {
  LOGIN_COMPLETE,
  LOGOUT_COMPLETE,
  STUDENT_UPDATED,
  NEW_USER,
  USER_ADDED,
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
      return { ...state, ...initialState };
    case NEW_USER:
      return {
        ...state,
        currentUser: {
          email: payload.user.email,
          image: payload.additionalUserInfo.avatar_url || payload.user.photoURL,
          name: payload.user.displayName || null,
          provider: payload.additionalUserInfo.providerId,
          uid: payload.user.uid,
          username: payload.additionalUserInfo.username || null
        }
      };
    case STUDENT_UPDATED:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          linkedin: payload.linkedin,
          portfolio: payload.portfolio
        }
      };
    case USER_ADDED:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          company: payload.company,
          linkedin: payload.linkedin,
          name: payload.name,
          website: payload.website
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
