import { call, put, take } from 'redux-saga/effects';
import { FETCH_STUDENT, STUDENT_RECEIVED } from './actions';
import { getData } from '../../api';
import { oneStudent, studentRepos } from '../../constants/endpoints';
import { formatDetailAPIResults } from '../../helpers';

function* fetchStudent(user) {
  const studentData = yield getData(oneStudent(user)).then(
    response => response.data
  );
  const payload = yield getData(studentRepos(user)).then(response =>
    formatDetailAPIResults(studentData, response.data)
  );
  yield put({ type: STUDENT_RECEIVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(FETCH_STUDENT);
    yield call(fetchStudent, payload);
  }
}
