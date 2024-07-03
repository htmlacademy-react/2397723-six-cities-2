import React from 'react';
import CitiesCardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import { Page } from '../../const/const';
import Sort from '../../components/sort/sort';
import { useAppSelector } from '../../hooks/redux-ts';
import CitiesTabsList from '../../components/cities-tabs-list/cities-tabs-list';
import { sorting } from '../../utils/sort';
import { Helmet } from 'react-helmet-async';
import MainEmpty from '../../components/main-empty/main-empty';
import { getIsOffersLoading, getOffers } from '../../store/offers-data/offers-data.selectors';
import { getActiveCity, getActiveSort } from '../../store/app-data/app-data.selectors';

export default function Main(): React.JSX.Element {
  const offers = useAppSelector(getOffers);
  const isLoading = useAppSelector(getIsOffersLoading);
  const activeCity = useAppSelector(getActiveCity);
  const activeSort = useAppSelector(getActiveSort);
  const offersByCity = activeCity ? offers.filter((offer) => offer.city.name === activeCity.name) : [];
  const sortedOffers = sorting[activeSort](offersByCity);

  return (
    <>
      <Helmet title='6 Cities' />
      <div className="page page--gray page--main">
        <main className={`page__main page__main--index ${offersByCity.length < 1 ? 'page__main--index-empty' : ''}`}>
          <CitiesTabsList />
          <div className="cities">
            {!isLoading && offersByCity.length < 1 && <MainEmpty activeCity={activeCity?.name} />}
            {!isLoading && offersByCity.length > 0 &&
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersByCity.length} places to stay in {activeCity?.name}</b>
                  <Sort />
                  <CitiesCardList
                    offers={sortedOffers}
                  />
                </section>
                <div className="cities__right-section">
                  <Map
                    offers={offersByCity}
                    renderingPage={Page.Cities}
                  />
                </div>
              </div>}
          </div>
        </main>
      </div>
    </>
  );
}
