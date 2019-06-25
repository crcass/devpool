export const ADD_JOB = 'ADD_JOB';
export const JOB_ADDED = 'JOB_ADDED';

export const addJob = payload => ({ type: ADD_JOB, payload });

export const jobAdded = payload => ({ type: JOB_ADDED, payload });
