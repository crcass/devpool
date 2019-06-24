import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from './config';

const app = firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();

export async function signIn() {
  try {
    const response = await app.auth().signInWithPopup(provider);
    return response;
  } catch (error) {
    throw error;
  }
}
