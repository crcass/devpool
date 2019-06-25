import { call, put, take } from 'redux-saga/effects';
import { REMOVE_COMMENT, COMMENT_REMOVED } from '../actions';
import { deleteData } from '../../../api';
import { removeComment } from '../../../constants/endpoints';

function* deleteComment(id) {
  const payload = yield deleteData(removeComment(id)).then(
    response => response.data
  );
  yield put({ type: COMMENT_REMOVED, payload });
}

export default function* actionWatcher() {
  while (true) {
    const { payload } = yield take(REMOVE_COMMENT);
    yield call(deleteComment, payload);
  }
}
