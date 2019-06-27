import {
  ADD_JOB,
  FETCH_JOBS,
  JOB_ADDED,
  JOBS_RECEIVED,
  JOB_REMOVED,
  REMOVE_JOB
} from '.';

export const addJob = payload => ({ type: ADD_JOB, payload });

export const fetchJobs = payload => ({ type: FETCH_JOBS, payload });

export const jobAdded = payload => ({ type: JOB_ADDED, payload });

export const jobsReceived = payload => ({ type: JOBS_RECEIVED, payload });

export const jobRemoved = payload => ({ type: JOB_REMOVED, payload });

export const removeJob = (payload, i) => ({
  type: REMOVE_JOB,
  payload,
  i
});
