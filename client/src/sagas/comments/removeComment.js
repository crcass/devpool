import { call, put, take } from 'redux-saga/effects';
import { REMOVE_COMMENT, COMMENT_REMOVED } from '../../actions';
import { deleteData } from '../../api';
import { removeComment } from '../../constants/endpoints';

function* deleteComment(id, i) {
  const payload = yield deleteData(removeComment(id)).then(
    response => response.data
  );
  yield put({ type: COMMENT_REMOVED, payload, i });
}

export default function* actionWatcher() {
  while (true) {
    const { payload, i } = yield take(REMOVE_COMMENT);
    yield call(deleteComment, payload, i);
  }
}
