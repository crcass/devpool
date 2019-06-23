import { fork, put, take } from 'redux-saga/effects';
import { ADD_COMMENT, COMMENT_ADDED } from './actions';
import { postComment } from '../../api';

function* addComment(user, data) {
  const payload = yield postComment(user, data).then(response => response.data);
  yield put({ type: COMMENT_ADDED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload, user } = yield take(ADD_COMMENT);
    yield fork(addComment, user, payload);
  }
}
