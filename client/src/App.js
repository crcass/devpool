import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AuthProvider from './Auth';
import Routes from './Routes';

const App = () => (
  <Provider store={store}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </Provider>
);

export default App;
