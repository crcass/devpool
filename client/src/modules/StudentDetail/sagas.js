import { fork, put, take } from 'redux-saga/effects';
import { COMMENTS_RECEIVED, FETCH_STUDENT, STUDENT_RECEIVED } from './actions';
import { getComments, getStudent } from '../../api';
import studentData from '../../data';
import { formatDetailAPIResults } from '../../helpers';

function* fetchComments(user) {
  const payload = yield getComments(user).then(response => response.data);
  yield put({ type: COMMENTS_RECEIVED, payload });
}

function* fetchStudent(user) {
  const payload = yield getStudent(
    `${user}/repos?affiliation=owner&sort=created`
  ).then(response => formatDetailAPIResults(studentData, response.data));
  yield put({ type: STUDENT_RECEIVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(FETCH_STUDENT);
    yield fork(fetchStudent, payload);
    yield fork(fetchComments, payload);
  }
}
