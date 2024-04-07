import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import PrivateRoute from '../components/private-route/private-route';
import Favorites from './favorites/favorites';
import Login from './login/login';
import Room from './offer/offer';
import NotFound from './not-found/not-found';
import Main from './main/main';


type AppRoutesProps = {
  placesCount: number;
}

export default function AppRoutes({ placesCount }: AppRoutesProps): JSX.Element {
  // TODO Попробовать react-helmet-async, ретроспектива 3.8 - 1:10:00
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<Main placesCount={placesCount} />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
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
        path={AppRoute.Room}
        element={<Room />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  );
}
