import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { COMMENT_ADDED } from './modules/StudentDetail/actions';
import student from './modules/StudentDetail/reducer';
import students from './modules/StudentList/reducer';

const rootReducer = combineReducers({
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
    }
  })
});

export default rootReducer;
