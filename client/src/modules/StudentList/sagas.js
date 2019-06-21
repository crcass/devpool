import { all, put, takeLatest } from 'redux-saga/effects';
import { FETCH_STUDENTS, STUDENTS_RECEIVED } from './actions';
import { getStudent } from '../../api';
import studentData from '../../data';
import { formatListAPIResults } from '../../helpers';

function* fetchStudents() {
  const payload = yield all(
    studentData.map(student =>
      getStudent(student.github).then(response =>
        formatListAPIResults(student, response.data)
      )
    )
  );
  yield put({ type: STUDENTS_RECEIVED, payload });
}

export default function* actionWatcher() {
  yield takeLatest(FETCH_STUDENTS, fetchStudents);
}
