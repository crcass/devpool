import { call, put, take } from 'redux-saga/effects';
import { ADD_JOB, JOB_ADDED } from './actions';
import { postJob } from '../../api';

function* addJob(data) {
  const payload = yield postJob(data).then(response => response.data);
  yield put({ type: JOB_ADDED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(ADD_JOB);
    yield call(addJob, payload);
  }
}
