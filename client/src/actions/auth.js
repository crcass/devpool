import { LOGOUT, USER_LOGIN } from '.';

export const userLogin = (history, provider) => ({
  type: USER_LOGIN,
  history,
  provider
});

export const logout = () => ({ type: LOGOUT });
