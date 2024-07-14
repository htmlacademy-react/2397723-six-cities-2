import React from 'react';
import { useAppSelector } from '../../hooks';
import { CitiesTabsList } from '../../components';
import { Helmet } from 'react-helmet-async';
import { getIsOffersLoading, getOffersByCity } from '../../store/offers-data/offers-data.selectors';
import {
  CitiesCardList,
  Map,
  Sort,
  MainEmpty
} from '../../components';
import { PlacesFound } from '../../components/places-found/places-found';

export default function Main(): React.JSX.Element {
  const isLoading = useAppSelector(getIsOffersLoading);
  const offersByCity = useAppSelector(getOffersByCity);

  return (
    <>
      <Helmet title='6 Cities' />
      <div className="page page--gray page--main">
        <main className={`page__main page__main--index ${offersByCity.length < 1 ? 'page__main--index-empty' : ''}`}>
          <CitiesTabsList />
          <div className="cities">
            {!isLoading && offersByCity.length > 0 ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <PlacesFound />
                  <Sort />
                  <CitiesCardList />
                </section>
                <div className="cities__right-section">
                  <Map
                    className='cities__map'
                    offers={offersByCity}
                  />
                </div>
              </div>
            ) : <MainEmpty />}
          </div>
        </main>
      </div>
    </>
  );
}
