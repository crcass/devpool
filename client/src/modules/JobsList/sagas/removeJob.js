import { call, put, take } from 'redux-saga/effects';
import { REMOVE_JOB, JOB_REMOVED } from '../actions';
import { deleteData } from '../../../api';
import { removeJob } from '../../../constants/endpoints';

function* deleteJob(id) {
  const payload = yield deleteData(removeJob(id)).then(
    response => response.data
  );
  yield put({ type: JOB_REMOVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(REMOVE_JOB);
    yield call(deleteJob, payload);
  }
}
