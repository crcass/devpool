import { call, put, take } from 'redux-saga/effects';
import { ADD_JOB, JOB_ADDED } from '../../actions';
import { postData } from '../../api';
import { allJobs } from '../../constants/endpoints';

function* addJob(data) {
  const payload = yield postData(allJobs, data).then(response => response.data);
  yield put({ type: JOB_ADDED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(ADD_JOB);
    yield call(addJob, payload);
  }
}
