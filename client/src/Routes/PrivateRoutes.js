import React from 'react';
import { Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { jobRoutes, studentRoutes } from '../constants/routes';

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
