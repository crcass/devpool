export const USER_LOGIN = 'USER_LOGIN';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';

export const userLogin = () => ({ type: USER_LOGIN });

export const loginComplete = payload => ({ type: LOGIN_COMPLETE, payload });
