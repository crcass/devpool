import { call, put, take } from 'redux-saga/effects';
import { UPDATE_USER, USER_UPDATED } from '../../actions';
import { putData } from '../../api';
import { user } from '../../constants/endpoints';

function* updateUser(data) {
  const { uid, company, linkedin } = data;
  const payload = { company, linkedin };
  yield putData(user(uid), data).then(response => response.data);
  yield put({ type: USER_UPDATED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(UPDATE_USER);
    yield call(updateUser, payload);
  }
}
