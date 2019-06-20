import { fork, put, take } from 'redux-saga/effects';
import { getStudent } from '../../api';

function* fetchStudent(student) {
  const payload = yield getStudent(student).then(response => response.data);
  yield put({ type: 'STUDENT_RECEIVED', payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take('FETCH_STUDENT');
    yield fork(fetchStudent, payload);
  }
}
