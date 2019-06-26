import { call, put, take } from 'redux-saga/effects';
import { SAVE_JOB, JOB_SAVED } from '../actions';
import { postData } from '../../../api';
import { savedJobs } from '../../../constants/endpoints';

function* saveJob(data) {
  const payload = yield postData(savedJobs, data).then(
    response => response.data
  );
  yield put({ type: JOB_SAVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload, user } = yield take(SAVE_JOB);
    payload.user = user;
    yield call(saveJob, payload);
  }
}
