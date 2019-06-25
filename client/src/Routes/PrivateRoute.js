import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUser ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;
