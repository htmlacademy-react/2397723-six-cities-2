import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import PrivateRoute from '../components/private-route/private-route';
import Favorites from './favorites/favorites';
import Login from './login/login';
import Room from './offer/offer';
import NotFound from './not-found/not-found';
import Main from './main/main';
import { Offer } from '../types/offer';


type AppRoutesProps = {
  placesCount: number;
  offers: Offer[];
}

export default function AppRoutes({ placesCount, offers }: AppRoutesProps): JSX.Element {
  // TODO Попробовать react-helmet-async, ретроспектива 3.8 - 1:10:00
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<Main placesCount={placesCount} offers={offers}/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.Auth}
          >
            <Favorites offers={offers} />
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
