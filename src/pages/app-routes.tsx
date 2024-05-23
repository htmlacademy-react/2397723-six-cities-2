import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import PrivateRoute from '../components/private-route/private-route';
import Favorites from './favorites/favorites';
import Login from './login/login';
import Offer from './offer/offer';
import NotFound from './not-found/not-found';
import Main from './main/main';
import HeaderLayout from '../components/header/header-layout';
import React from 'react';

export default function AppRoutes(): React.JSX.Element {
  // TODO Попробовать react-helmet-async, ретроспектива 3.8 - 1:10:00

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<HeaderLayout />}>
        <Route
          index
          element={<Main />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}
