import { JOB_ADDED } from './actions';

const initialState = { jobs: [], jobsLoaded: false };

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case JOB_ADDED:
      return { ...state, jobs: [...state.jobs, payload] };
    default:
      return state;
  }
}
