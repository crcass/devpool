import { call, put, take, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_COMPLETE,
  LOGOUT,
  LOGOUT_COMPLETE,
  NEW_USER,
  USER_LOGIN
} from '../../actions';
import { firebaseSignOut, signIn } from '../../Auth';
import { getData } from '../../api';
import { oneStudent, user } from '../../constants/endpoints';
import { formatAuthenticatedUser } from '../../helpers';

function* handleLogin(history, provider) {
  const auth = yield signIn(provider).then(response => response);
  const { data } =
    auth.additionalUserInfo.providerId === 'github.com'
      ? yield getData(oneStudent(auth.additionalUserInfo.username)).then(
          response => response
        )
      : yield getData(user(auth.user.uid)).then(response => response);
  if (data === null) {
    yield put({ type: NEW_USER, payload: auth });
    history.push('/adduser/');
  } else {
    const payload = formatAuthenticatedUser(auth, data);
    yield put({ type: LOGIN_COMPLETE, payload });
    payload.provider === 'google.com'
      ? history.push('/dashboard/students')
      : history.push('/dashboard/jobs');
  }
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
