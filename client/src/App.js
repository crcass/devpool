import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import StudentList from './modules/StudentList';
// import StudentDetail from './modules/StudentDetail';
import Routes from './Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
