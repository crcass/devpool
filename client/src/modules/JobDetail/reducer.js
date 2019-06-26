export const JOB_DELETED = 'JOB_DELETED';
export const JOB_SAVED = 'JOB_SAVED';

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
    default:
      return state;
  }
}
