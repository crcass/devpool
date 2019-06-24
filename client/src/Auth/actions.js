export const USER_LOGIN = 'USER_LOGIN';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';

export const userLogin = history => ({ type: USER_LOGIN, history });

export const loginComplete = (payload, history) => ({
  type: LOGIN_COMPLETE,
  payload,
  history
});
