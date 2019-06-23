import { call, put, take } from 'redux-saga/effects';
import { FETCH_STUDENT, STUDENT_RECEIVED } from './actions';
import { getStudent, loadStudent } from '../../api';
import { formatDetailAPIResults } from '../../helpers';

function* fetchStudent(user) {
  const studentData = yield loadStudent(user).then(response => response.data);
  const payload = yield getStudent(
    `${user}/repos?affiliation=owner&sort=created`
  ).then(response => formatDetailAPIResults(studentData, response.data));
  yield put({ type: STUDENT_RECEIVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(FETCH_STUDENT);
    yield call(fetchStudent, payload);
  }
}
