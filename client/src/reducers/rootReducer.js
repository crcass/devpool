import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { COMMENT_ADDED, JOB_ADDED } from '../actions';
import auth from './auth';
import comments from './comments';
import jobs from './jobs';
import repos from './repos';
import savedJobs from './savedJobs';
import students from './students';

const rootReducer = combineReducers({
  auth,
  comments,
  jobs,
  repos,
  savedJobs,
  students,
  form: formReducer.plugin({
    comment: (state, action) => {
      const { type } = action;
      switch (type) {
        case COMMENT_ADDED:
          return undefined;
        default:
          return state;
      }
    },
    job: (state, action) => {
      const { type } = action;
      switch (type) {
        case JOB_ADDED:
          return undefined;
        default:
          return state;
      }
    }
  })
});

export default rootReducer;
