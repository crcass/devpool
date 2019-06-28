import { all } from 'redux-saga/effects';
import fetchStudents from './fetchStudents';
import updateStudent from './updateStudent';

export default function*() {
  yield all([fetchStudents(), updateStudent()]);
}
