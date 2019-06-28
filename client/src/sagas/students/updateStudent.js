import { call, put, take } from 'redux-saga/effects';
import { STUDENT_UPDATED, UPDATE_STUDENT } from '../../actions';
import { putData } from '../../api';
import { oneStudent } from '../../constants/endpoints';

function* updateStudent(user) {
  const { github, linkedin, portfolio } = user;
  const payload = { linkedin, portfolio };
  yield putData(oneStudent(github), user).then(response => response.data);
  yield put({ type: STUDENT_UPDATED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(UPDATE_STUDENT);
    yield call(updateStudent, payload);
  }
}
