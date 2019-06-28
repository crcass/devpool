import { DELETE_JOB, FETCH_SAVED_JOBS, SAVE_JOB } from '.';

export const deleteJob = (payload, i) => ({ type: DELETE_JOB, payload, i });

export const fetchSavedJobs = payload => ({ type: FETCH_SAVED_JOBS, payload });

export const saveJob = (id, user, payload) => ({
  type: SAVE_JOB,
  id,
  user,
  payload
});
