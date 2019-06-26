import { call, put, take } from 'redux-saga/effects';
import { FETCH_REPOS, REPOS_RECEIVED } from './actions';
import { getData } from '../../api';
import { studentRepos } from '../../constants/endpoints';
import { formatRepoAPIResults } from '../../helpers';

function* fetchRepos(user) {
  const payload = yield getData(studentRepos(user)).then(response =>
    formatRepoAPIResults(response.data)
  );
  yield put({ type: REPOS_RECEIVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(FETCH_REPOS);
    yield call(fetchRepos, payload);
  }
}
