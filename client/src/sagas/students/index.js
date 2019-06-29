import { all } from 'redux-saga/effects';
import addStudent from './addStudent';
import fetchStudents from './fetchStudents';
import updateStudent from './updateStudent';

export default function*() {
  yield all([addStudent(), fetchStudents(), updateStudent()]);
}
