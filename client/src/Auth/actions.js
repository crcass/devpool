export const USER_LOGIN_GITHUB = 'USER_LOGIN_GITHUB';
export const USER_LOGIN = 'USER_LOGIN';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_COMPLETE = 'LOGOUT_COMPLETE';

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
