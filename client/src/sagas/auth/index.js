import { all } from 'redux-saga/effects';
import login from './login';
import updateUser from './updateUser';

export default function*() {
  yield all([login(), updateUser()]);
}
