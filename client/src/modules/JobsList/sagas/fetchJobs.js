import { call, put, take } from 'redux-saga/effects';
import { FETCH_JOBS, JOBS_RECEIVED } from '../actions';
import { getData } from '../../../api';
import { allJobs } from '../../../constants/endpoints';

function* fetchJobs(id) {
  const payload = yield getData(allJobs(id)).then(response => response.data);
  yield put({ type: JOBS_RECEIVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(FETCH_JOBS);
    yield call(fetchJobs, payload);
  }
}
