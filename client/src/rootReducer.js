import { combineReducers } from 'redux';
import student from './modules/StudentDetail/reducer';
import students from './modules/StudentList/reducer';

const rootReducer = combineReducers({ student, students });

export default rootReducer;
