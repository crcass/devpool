import { all } from 'redux-saga/effects';
import addCommentSaga from './addComment';
import fetchComments from './fetchComments';
import removeCommentSaga from './removeComment';

export default function*() {
  yield all([addCommentSaga(), fetchComments(), removeCommentSaga()]);
}
