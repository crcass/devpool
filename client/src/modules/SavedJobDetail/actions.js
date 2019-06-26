export const DELETE_JOB = 'DELETE_JOB';
export const FETCH_SAVED_JOBS = 'FETCH_SAVED_JOBS';
export const JOB_DELETED = 'JOB_DELETED';
export const JOB_SAVED = 'JOB_SAVED';
export const SAVE_JOB = 'SAVE_JOB';
export const SAVED_JOBS_RECEIVED = 'SAVED_JOBS_RECEIVED';

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
