import { all } from 'redux-saga/effects';
import addCommentSaga from './addCommentSaga';
import removeCommentSaga from './removeCommentSaga';
import studentSaga from './studentSaga';

export default function*() {
  yield all([addCommentSaga(), removeCommentSaga(), studentSaga()]);
}
