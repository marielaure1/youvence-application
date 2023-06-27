import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { loginSuccess, loginFail } from '@/src/api/store'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if(localStorage.getItem("token")){
      dispatch(loginSuccess(localStorage.getItem("token")))
    }
  }, []); // Utilisation d'un tableau de dépendances vide pour s'assurer que l'effet s'exécute une seule fois

  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to="/connexion" />
        )
      }
    />
  );
};

export default ProtectedRoute;
