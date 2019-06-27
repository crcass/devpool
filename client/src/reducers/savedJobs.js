import {
  LOGOUT_COMPLETE,
  JOB_DELETED,
  JOB_SAVED,
  SAVED_JOBS_RECEIVED
} from '../actions';

const initialState = {
  savedJobs: [],
  savedJobsLoaded: false
};

export default function(state = initialState, action) {
  const { i, payload, type } = action;
  switch (type) {
    case JOB_DELETED:
      return {
        ...state,
        savedJobs: [
          ...state.savedJobs.slice(0, i),
          ...state.savedJobs.slice(i + 1)
        ]
      };
    case JOB_SAVED:
      return { ...state, savedJobs: [...state.savedJobs, payload] };
    case SAVED_JOBS_RECEIVED:
      return {
        ...state,
        savedJobs: payload,
        savedJobsLoaded: true
      };
    case LOGOUT_COMPLETE:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
