import { call, put, take } from 'redux-saga/effects';
import { COMMENTS_RECEIVED, FETCH_COMMENTS } from '../actions';
import { getComments } from '../../../api';

function* fetchComments(id, author) {
  const payload = yield getComments(id, author).then(response => response.data);
  yield put({ type: COMMENTS_RECEIVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { author, id } = yield take(FETCH_COMMENTS);
    yield call(fetchComments, id, author);
  }
}
