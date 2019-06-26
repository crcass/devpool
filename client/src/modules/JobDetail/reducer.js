import { JOB_DELETED, JOB_SAVED } from './actions';
import { LOGOUT_COMPLETE } from '../../auth/actions';

const initialState = {
  savedJobs: {
    savedJobs: [],
    savedJobsLoaded: false
  }
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
    case LOGOUT_COMPLETE:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
