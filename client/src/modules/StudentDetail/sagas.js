import { fork, put, take } from 'redux-saga/effects';
import { FETCH_STUDENT, STUDENT_RECEIVED } from './actions';
import { getStudent } from '../../api';
import studentData from '../../data';
import { formatDetailAPIResults } from '../../helpers';

function* fetchStudent(student) {
  const payload = yield getStudent(
    `${student}/repos?affiliation=owner&sort=created`
  ).then(response => formatDetailAPIResults(studentData, response.data));
  yield put({ type: STUDENT_RECEIVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(FETCH_STUDENT);
    yield fork(fetchStudent, payload);
  }
}
