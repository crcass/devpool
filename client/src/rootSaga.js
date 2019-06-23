import { all } from 'redux-saga/effects';
import watchComments from './modules/Comments/sagas';
import watchStudent from './modules/StudentDetail/sagas';
import watchStudents from './modules/StudentList/sagas';

export default function* rootSaga() {
  yield all([watchComments(), watchStudent(), watchStudents()]);
}
