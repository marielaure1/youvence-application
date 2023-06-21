import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const UnaccessibleRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector(state => state.isLogged);

  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default UnaccessibleRoute;
