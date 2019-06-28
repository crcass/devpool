import {
  JOB_ADDED,
  JOBS_RECEIVED,
  JOB_REMOVED,
  LOGOUT_COMPLETE
} from '../actions';

const initialState = { jobs: [], jobsLoaded: false };

export default function(state = initialState, action) {
  const { i, payload, type } = action;
  switch (type) {
    case JOB_ADDED:
      return { ...state, jobs: [...state.jobs, payload] };
    case JOB_REMOVED:
      return {
        ...state,
        jobs: [...state.jobs.slice(0, i), ...state.jobs.slice(i + 1)]
      };
    case JOBS_RECEIVED:
      return {
        ...state,
        jobs: payload,
        jobsLoaded: true
      };
    case LOGOUT_COMPLETE:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
