import { JOB_ADDED, JOBS_RECEIVED } from './actions';
import { LOGOUT_COMPLETE } from '../../auth/actions';

const initialState = { jobs: [], jobsLoaded: false };

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case JOB_ADDED:
      return { ...state, jobs: [...state.jobs, payload] };
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
