import { all } from 'redux-saga/effects';
import watchStudent from './modules/StudentDetail/sagas';
import watchStudents from './modules/StudentList/sagas';

export default function* rootSaga() {
  yield all([watchStudent(), watchStudents()]);
}
