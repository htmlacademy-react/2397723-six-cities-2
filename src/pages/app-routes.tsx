import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import PrivateRoute from '../components/private-route/private-route';
import Favorites from './favorites/favorites';
import Login from './login/login';
import Offer from './offer/offer';
import NotFound from './not-found/not-found';
import Main from './main/main';
import { OfferData } from '../types/offer';
import HeaderLayout from '../components/header/header-layout';
import React, { useState } from 'react';

type Props = {
  placesCount: number;
  offers: OfferData[];
}

export default function AppRoutes({ placesCount, offers }: Props): React.JSX.Element {
  // TODO Попробовать react-helmet-async, ретроспектива 3.8 - 1:10:00

  //TODO эта часть кода временная, для того, чтобы передавать в компонент Room только одно конкретное предложение и конкретный список похожих предложений
  const [currentOffer, setCurrentOffer] = useState<OfferData | undefined>();
  const [nearOffers, setNearOffers] = useState<OfferData[]>(offers);
  const setOffer = (offerId: string | undefined) => {
    const offer: OfferData | undefined = offers.find((item) => item.id === offerId);
    const newNearOffers = offers.filter((nearOffer) => nearOffer.id !== offer?.id);
    setNearOffers(newNearOffers);
    setCurrentOffer(offer);
  };

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<HeaderLayout />}>
        <Route
          index
          element={<Main placesCount={placesCount} offers={offers} changeCurrentOffer={setOffer}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites offers={offers} changeCurrentOffer={setOffer}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer offer={currentOffer} nearOffers={nearOffers} changeCurrentOffer={setOffer}/>}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}
