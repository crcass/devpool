import { put, takeLatest } from 'redux-saga/effects';
import { USER_LOGIN, LOGIN_COMPLETE } from './actions';
import { signIn } from './api';
import { formatGoogleUser } from '../helpers';

function* handleLogin() {
  const payload = yield signIn().then(response =>
    formatGoogleUser(response.user)
  );
  yield put({ type: LOGIN_COMPLETE, payload });
}

export default function* actionWatcher() {
  yield takeLatest(USER_LOGIN, handleLogin);
}
