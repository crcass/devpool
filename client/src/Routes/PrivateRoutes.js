import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { jobRoutes, studentRoutes } from '../constants/routes';

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUser ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const renderRoutes = (currentUser, routes) =>
  routes.map(route => {
    const { component, path } = route;
    return (
      <PrivateRoute
        key={path}
        exact
        path={path}
        component={component}
        currentUser={currentUser}
      />
    );
  });

const PrivateRoutes = ({ currentUser }) => {
  if (!currentUser) {
    return <Redirect to="/" />;
  }
  return currentUser.provider === 'google.com'
    ? renderRoutes(currentUser, studentRoutes)
    : renderRoutes(currentUser, jobRoutes);
};

export default PrivateRoutes;
