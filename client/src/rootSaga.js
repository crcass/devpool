import { all } from 'redux-saga/effects';
import watchStudent from './modules/StudentDetail/sagas';
import watchStudents from './modules/StudentList/sagas';
import addComment from './modules/StudentDetail/addCommentSaga';
import removeComment from './modules/StudentDetail/removeCommentSaga';

export default function* rootSaga() {
  yield all([watchStudent(), watchStudents(), addComment(), removeComment()]);
}
