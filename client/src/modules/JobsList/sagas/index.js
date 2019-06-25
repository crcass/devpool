import { all } from 'redux-saga/effects';
import createJob from './createJob';
import fetchJobs from './fetchJobs';
import removeJob from './removeJob';

export default function*() {
  yield all([createJob(), fetchJobs(), removeJob()]);
}
