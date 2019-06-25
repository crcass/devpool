import { all, put, takeLatest } from 'redux-saga/effects';
import { FETCH_STUDENTS, STUDENTS_RECEIVED } from './actions';
import { getData } from '../../api';
import { githubProfile, allStudents } from '../../constants/endpoints';
import { formatListAPIResults } from '../../helpers';

function* fetchStudents() {
  const studentData = yield getData(allStudents).then(data => data.data);
  const payload = yield all(
    studentData.map(student =>
      getData(githubProfile(student.github)).then(response =>
        formatListAPIResults(student, response.data)
      )
    )
  );
  yield put({ type: STUDENTS_RECEIVED, payload });
}

export default function* actionWatcher() {
  yield takeLatest(FETCH_STUDENTS, fetchStudents);
}
