import { ADD_JOB, FETCH_JOBS, REMOVE_JOB } from '.';

export const addJob = payload => ({ type: ADD_JOB, payload });

export const fetchJobs = payload => ({ type: FETCH_JOBS, payload });

export const removeJob = (payload, i) => ({
  type: REMOVE_JOB,
  payload,
  i
});
