import { all, put, takeLatest } from 'redux-saga/effects';
import { getStudent } from '../../api';
import studentData from '../../data';

function* fetchStudents() {
  const payload = yield all(
    studentData.map(student =>
      getStudent(student.github).then(response => response.data)
    )
  );
  yield put({ type: 'STUDENTS_RECEIVED', payload });
}

export default function* actionWatcher() {
  yield takeLatest('FETCH_STUDENTS', fetchStudents);
}
