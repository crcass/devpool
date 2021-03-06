import { call, put, take } from 'redux-saga/effects';
import { REMOVE_JOB, JOB_REMOVED } from '../../actions';
import { deleteData } from '../../api';
import { oneJob } from '../../constants/endpoints';

function* deleteJob(id, i) {
  const payload = yield deleteData(oneJob(id)).then(response => response.data);
  yield put({ type: JOB_REMOVED, payload, i });
}

export default function* actionWatcher() {
  while (true) {
    const { payload, i } = yield take(REMOVE_JOB);
    yield call(deleteJob, payload, i);
  }
}
