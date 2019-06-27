import { fork } from 'redux-saga/effects';
import watchComments from './comments';
import watchLogin from './auth';
import watchJobs from './jobs';
import watchSavedJobs from './savedJobs';
import watchRepos from './repos';
import watchStudents from './students';

export default function* rootSaga() {
  yield fork(watchComments);
  yield fork(watchLogin);
  yield fork(watchJobs);
  yield fork(watchSavedJobs);
  yield fork(watchRepos);
  yield fork(watchStudents);
}
