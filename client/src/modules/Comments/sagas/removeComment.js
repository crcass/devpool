import { call, put, take } from 'redux-saga/effects';
import { REMOVE_COMMENT, COMMENT_REMOVED } from '../actions';
import { deleteComment } from '../../../api';

function* addComment(id) {
  const payload = yield deleteComment(id).then(response => response.data);
  yield put({ type: COMMENT_REMOVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(REMOVE_COMMENT);
    yield call(addComment, payload);
  }
}
