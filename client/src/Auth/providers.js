import * as firebase from 'firebase/app';
import 'firebase/auth';

const googleAuth = new firebase.auth.GoogleAuthProvider();
const githubAuth = new firebase.auth.GithubAuthProvider();

const providers = [
  { name: 'Github', method: githubAuth },
  { name: 'Google', method: googleAuth }
];

export default providers;
