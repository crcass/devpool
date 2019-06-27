import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from './config';

const app = firebase.initializeApp(config);

export async function signIn(provider) {
  try {
    const response = await app.auth().signInWithPopup(provider);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function firebaseSignOut() {
  try {
    const response = await app.auth().signOut();
    return response;
  } catch (error) {
    throw error;
  }
}
