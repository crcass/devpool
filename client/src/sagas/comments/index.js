import { all } from 'redux-saga/effects';
import addComment from './addComment';
import fetchComments from './fetchComments';
import removeCommentSaga from './removeComment';

export default function*() {
  yield all([addComment(), fetchComments(), removeCommentSaga()]);
}
