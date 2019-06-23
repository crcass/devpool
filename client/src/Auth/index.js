import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from './config';
import { userLogin } from './actions';

export const AuthContext = React.createContext();

const app = firebase.initializeApp(config);

const AuthProvider = ({ children, currentUser, userLogin }) => {
  useEffect(() => {
    if (currentUser === null) {
      app.auth().onAuthStateChanged(userLogin(currentUser));
    }
  }, [currentUser, userLogin]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthProvider);
