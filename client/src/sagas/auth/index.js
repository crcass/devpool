import { all } from 'redux-saga/effects';
import login from './login';
import addUser from './addUser';
import updateUser from './updateUser';

export default function*() {
  yield all([login(), addUser(), updateUser()]);
}
