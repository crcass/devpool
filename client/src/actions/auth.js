import { LOGIN_COMPLETE, LOGOUT, LOGOUT_COMPLETE, USER_LOGIN } from '.';

export const userLogin = (history, provider) => ({
  type: USER_LOGIN,
  history,
  provider
});

export const loginComplete = (payload, history) => ({
  type: LOGIN_COMPLETE,
  payload,
  history
});

export const logout = () => ({ type: LOGOUT });

export const logoutComplete = payload => ({ type: LOGOUT_COMPLETE, payload });
