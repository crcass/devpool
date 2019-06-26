export const ADD_JOB = 'ADD_JOB';
export const FETCH_JOBS = 'FETCH_JOBS';
export const JOB_ADDED = 'JOB_ADDED';
export const JOB_REMOVED = 'JOB_REMOVED';
export const JOBS_RECEIVED = 'JOBS_RECEIVED';
export const REMOVE_JOB = 'REMOVE_JOB';

export const addJob = payload => ({ type: ADD_JOB, payload });

export const fetchJobs = payload => ({ type: FETCH_JOBS, payload });

export const jobAdded = payload => ({ type: JOB_ADDED, payload });

export const jobRemoved = payload => ({ type: JOB_REMOVED, payload });

export const jobsReceived = payload => ({ type: JOBS_RECEIVED, payload });

export const removeJob = (payload, i) => ({
  type: REMOVE_JOB,
  payload,
  i
});
