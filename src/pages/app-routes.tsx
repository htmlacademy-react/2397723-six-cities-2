import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../const/const';
import PrivateRoute from '../components/private-route/private-route';
import Favorites from './favorites/favorites';
import Login from './login/login';
import Offer from './offer/offer';
import NotFound from './not-found/not-found';
import Main from './main/main';
import HeaderLayout from '../components/header/header-layout';
import React from 'react';
import { useAppSelector } from '../hooks/redux-ts';
import { HelmetProvider } from 'react-helmet-async';
import { getAuthorizationStatus } from '../store/user-data/user-data.selectors';

export default function AppRoutes(): React.JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HelmetProvider>
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
                authorizationStatus={authorizationStatus}
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
    </HelmetProvider>
  );
}
