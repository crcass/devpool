import { call, put, take, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_COMPLETE,
  LOGOUT,
  LOGOUT_COMPLETE,
  USER_LOGIN
} from '../actions';
import { firebaseSignOut, signIn } from '../auth';
import { formatAuthenticatedUser } from '../helpers';

function* handleLogin(history, provider) {
  const payload = yield signIn(provider).then(response =>
    formatAuthenticatedUser(response)
  );
  yield put({ type: LOGIN_COMPLETE, payload });
  payload.provider === 'google.com'
    ? history.push('/dashboard/students')
    : history.push('/dashboard/jobs');
}

function* handleLogout() {
  yield firebaseSignOut().then(response => response);
  yield put({ type: LOGOUT_COMPLETE });
}

export default function* actionWatcher() {
  while (true) {
    const { history, provider } = yield take(USER_LOGIN);
    yield call(handleLogin, history, provider);
    yield takeLatest(LOGOUT, handleLogout);
  }
}
