import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { COMMENT_ADDED } from './modules/Comments/actions';
import { JOB_ADDED } from './modules/JobsList/actions';
import auth from './auth/reducer';
import comments from './modules/Comments/reducer';
import jobs from './modules/JobsList/reducer';
import student from './modules/StudentDetail/reducer';
import students from './modules/StudentList/reducer';

const rootReducer = combineReducers({
  auth,
  comments,
  jobs,
  student,
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
