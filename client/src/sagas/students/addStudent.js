import { call, put, take } from 'redux-saga/effects';
import { ADD_STUDENT, STUDENT_ADDED } from '../../actions';
import { postData } from '../../api';
import { oneStudent } from '../../constants/endpoints';

function* addStudent(data, history) {
  const { github, linkedin, name, portfolio } = data;
  const payload = { linkedin, name, portfolio };
  yield postData(oneStudent(github), data).then(response => response.data);
  yield put({ type: STUDENT_ADDED, payload });
  history.push('/dashboard/jobs');
}

export default function* actionWatcher() {
  while (true) {
    const { payload, history } = yield take(ADD_STUDENT);
    yield call(addStudent, payload, history);
  }
}
