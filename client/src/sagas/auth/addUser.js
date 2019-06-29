import { call, put, take } from 'redux-saga/effects';
import { ADD_USER, USER_ADDED } from '../../actions';
import { postData } from '../../api';
import { user } from '../../constants/endpoints';

function* addUser(data, history) {
  const { uid, company, linkedin, name, website } = data;
  const payload = { company, linkedin, name, website };
  yield postData(user(uid), data).then(response => response.data);
  yield put({ type: USER_ADDED, payload });
  history.push('/dashboard/students');
}

export default function* actionWatcher() {
  while (true) {
    const { payload, history } = yield take(ADD_USER);
    yield call(addUser, payload, history);
  }
}
