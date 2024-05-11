import React, { useState } from 'react';
import CitiesCardList from '../../components/card-list/card-list';
import { OfferData } from '../../types/offer';
import Map from '../../components/map/map';
import { Amsterdam, Page } from '../../const/const';
import Sort from '../../components/sort/sort';

type Props = {
  placesCount: number;
  offers: OfferData[];
  changeCurrentOffer: (id: string) => void;
}

export default function Main({ placesCount, offers, changeCurrentOffer }: Props): React.JSX.Element {
  const [selectedOffer, setSelectedPoint] = useState<OfferData | undefined>(
    undefined
  );

  const handleOffersItemHover = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedPoint(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <Sort />
              <CitiesCardList
                offers={offers}
                onOffersItemHover={handleOffersItemHover}
                changeCurrentOffer={changeCurrentOffer}
              />
            </section>
            <div className="cities__right-section">
              <Map city={Amsterdam} offers={offers} selectedOffer={selectedOffer} renderingPage={Page.Cities} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
