import { fork } from 'redux-saga/effects';
import watchComments from './modules/Comments/sagas';
import watchLogin from './auth/sagas';
import watchJobs from './modules/JobsList/sagas';
import watchSavedJobs from './modules/SavedJobDetail/sagas';
import watchStudent from './modules/StudentDetail/sagas';
import watchStudents from './modules/StudentList/sagas';

export default function* rootSaga() {
  yield fork(watchComments);
  yield fork(watchLogin);
  yield fork(watchJobs);
  yield fork(watchSavedJobs);
  yield fork(watchStudent);
  yield fork(watchStudents);
}
