import React, { useState } from 'react';
import CitiesCardList from '../../components/card-list/card-list';
import { OfferData } from '../../types/offer';
import Map from '../../components/map/map';
import { Page } from '../../const/const';
import Sort from '../../components/sort/sort';
import { useAppSelector } from '../../hooks/redux-ts';
import CitiesTabsList from '../../components/cities-tabs-list/cities-tabs-list';
import { sorting } from '../../utils/sort';

export default function Main(): React.JSX.Element {
  const [selectedOffer, setSelectedPoint] = useState<OfferData | undefined>(
    undefined
  );

  const activeCity = useAppSelector((state) => state.APP.activeCity);
  const offers = useAppSelector((state) => state.OFFERS.offers);
  const activeSort = useAppSelector((state) => state.APP.activeSort);
  const offersByCity = activeCity ? offers.filter((offer) => offer.city.name === activeCity.name) : [];
  const sortedOffers = sorting[activeSort](offersByCity);

  const handleOffersItemHover = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedPoint(currentOffer);
  };

  const isLoading = useAppSelector((state) => state.OFFERS.isOffersLoading);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <CitiesTabsList />
        <div className="cities">
          {!isLoading &&
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {activeCity?.name}</b>
                <Sort />
                <CitiesCardList
                  offers={sortedOffers}
                  onOffersItemHover={handleOffersItemHover}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  offers={offersByCity}
                  selectedOffer={selectedOffer}
                  renderingPage={Page.Cities}
                />
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}
