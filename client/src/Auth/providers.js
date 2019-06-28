import * as firebase from 'firebase/app';
import 'firebase/auth';

const googleAuth = new firebase.auth.GoogleAuthProvider();
const githubAuth = new firebase.auth.GithubAuthProvider();

const providers = [
  {
    name: 'Github',
    method: githubAuth,
    title: 'Students',
    text: 'Login with your GitHub account.'
  },
  {
    name: 'Google',
    method: googleAuth,
    title: 'Recruiters',
    text: 'Login with your Google account.'
  }
];

export default providers;
