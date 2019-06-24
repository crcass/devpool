import { call, put, take } from 'redux-saga/effects';
import { USER_LOGIN, LOGIN_COMPLETE } from './actions';
import { signIn } from './api';
import { formatGoogleUser } from '../helpers';

function* handleLogin(history) {
  const payload = yield signIn().then(response => formatGoogleUser(response));
  yield put({ type: LOGIN_COMPLETE, payload });
  payload.provider === 'google.com'
    ? history.push('/students')
    : console.log('GITHUB TIME');
}

export default function* actionWatcher() {
  const { history } = yield take(USER_LOGIN);
  yield call(handleLogin, history);
}
