import { call, put, take } from 'redux-saga/effects';
import { DELETE_JOB, JOB_DELETED } from '../actions';
import { deleteData } from '../../../api';
import { userJobs } from '../../../constants/endpoints';

function* deleteJob(id, i) {
  const payload = yield deleteData(userJobs(id)).then(
    response => response.data
  );
  yield put({ type: JOB_DELETED, payload, i });
}

export default function* actionWatcher() {
  while (true) {
    const { payload, i } = yield take(DELETE_JOB);
    yield call(deleteJob, payload, i);
  }
}
