import { ADD_USER, FETCH_USER, UPDATE_USER } from '.';

export const addUser = payload => ({ type: ADD_USER, payload });

export const fetchUser = payload => ({ type: FETCH_USER, payload });

export const updateUser = payload => ({ type: UPDATE_USER, payload });
