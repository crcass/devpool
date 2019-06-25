import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_JOBS, JOBS_RECEIVED } from '../actions';
import { getData } from '../../../api';
import { allJobs } from '../../../constants/endpoints';

function* fetchJobs() {
  const payload = yield getData(allJobs).then(response => response.data);
  yield put({ type: JOBS_RECEIVED, payload });
}

export default function* actionWatcher() {
  yield takeLatest(FETCH_JOBS, fetchJobs);
}
