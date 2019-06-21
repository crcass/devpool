import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import student from './modules/StudentDetail/reducer';
import students from './modules/StudentList/reducer';

const rootReducer = combineReducers({ student, students, form: formReducer });

export default rootReducer;
