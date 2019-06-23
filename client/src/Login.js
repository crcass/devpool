import React from 'react';
import { signIn } from './Auth/api';

const Login = () => <button onClick={signIn}>Sign In With Google</button>;

export default Login;
