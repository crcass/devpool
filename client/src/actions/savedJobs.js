import {
  DELETE_JOB,
  FETCH_SAVED_JOBS,
  JOB_DELETED,
  JOB_SAVED,
  SAVE_JOB
} from '.';

export const deleteJob = (payload, i) => ({ type: DELETE_JOB, payload, i });

export const fetchSavedJobs = payload => ({ type: FETCH_SAVED_JOBS, payload });

export const jobDeleted = (payload, i) => ({ type: JOB_DELETED, payload, i });

export const jobsaved = payload => ({ type: JOB_SAVED, payload });

export const saveJob = (id, user, payload) => ({
  type: SAVE_JOB,
  id,
  user,
  payload
});
