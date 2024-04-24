import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import React from 'react';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: React.JSX.Element;
}

export default function PrivateRoute({ authorizationStatus, children }: Props): React.JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
