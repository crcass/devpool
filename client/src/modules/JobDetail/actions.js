export const DELETE_JOB = 'DELETE_JOB';
export const JOB_DELETED = 'JOB_DELETED';
export const JOB_SAVED = 'JOB_SAVED';
export const SAVE_JOB = 'SAVE_JOB';

export const deleteJob = payload => ({ type: DELETE_JOB, payload });

export const jobDeleted = () => ({ type: JOB_DELETED });

export const jobsaved = payload => ({ type: JOB_SAVED });

export const saveJob = (id, user, payload) => ({
  type: SAVE_JOB,
  id,
  user,
  payload
});
