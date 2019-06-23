import * as firebase from 'firebase/app';
import 'firebase/auth';

const provider = new firebase.auth.GoogleAuthProvider();

export async function signIn() {
  try {
    const response = await firebase.auth().signInWithPopup(provider);
    return response;
  } catch (error) {
    throw error;
  }
}
