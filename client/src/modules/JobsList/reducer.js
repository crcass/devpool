import { JOB_ADDED, JOBS_RECEIVED } from './actions';

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
    default:
      return state;
  }
}
