import { all } from 'redux-saga/effects';
// import deleteSavedJob from './deleteSavedJob';
// import fetchSavedJobs from './fetchSavedJobs';
import saveJob from './saveJob';

export default function*() {
  yield all([
    // deleteSavedJob(),
    // fetchSavedJobs(),
    saveJob()
  ]);
}
