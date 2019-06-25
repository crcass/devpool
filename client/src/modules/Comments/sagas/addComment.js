import { call, put, take } from 'redux-saga/effects';
import { ADD_COMMENT, COMMENT_ADDED } from '../actions';
import { postData } from '../../../api';
import { createComment } from '../../../constants/endpoints';

function* addComment(user, author, data) {
  const payload = yield postData(createComment(user, author), data).then(
    response => response.data
  );
  yield put({ type: COMMENT_ADDED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { author, payload, user } = yield take(ADD_COMMENT);
    yield call(addComment, user, author, payload);
  }
}
