import { call, put, take } from 'redux-saga/effects';
import { FETCH_SAVED_JOBS, SAVED_JOBS_RECEIVED } from '../../actions';
import { getData } from '../../api';
import { userJobs } from '../../constants/endpoints';

function* fetchSavedJobs(id) {
  const payload = yield getData(userJobs(id)).then(response => response.data);
  yield put({ type: SAVED_JOBS_RECEIVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(FETCH_SAVED_JOBS);
    yield call(fetchSavedJobs, payload);
  }
}
