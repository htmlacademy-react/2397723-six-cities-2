import React, { useEffect, useState } from 'react';
import CitiesCardList from '../../components/card-list/card-list';
import { OfferData } from '../../types/offer';
import Map from '../../components/map/map';
import { Cities, Page } from '../../const/const';
import Sort from '../../components/sort/sort';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-ts';
import { fetchOffers } from '../../redux/action';
import CitiesList from '../../components/cities-list/cities-list';

type Props = {
  changeCurrentOffer: (id: string) => void;
}

export default function Main({ changeCurrentOffer }: Props): React.JSX.Element {
  const [selectedOffer, setSelectedPoint] = useState<OfferData | undefined>(
    undefined
  );

  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const handleOffersItemHover = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedPoint(currentOffer);
  };


  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <CitiesList/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort />
              <CitiesCardList
                offers={offers}
                onOffersItemHover={handleOffersItemHover}
                changeCurrentOffer={changeCurrentOffer}
              />
            </section>
            <div className="cities__right-section">
              <Map city={Cities.find((city) => city.name === 'Amsterdam')} offers={offers} selectedOffer={selectedOffer} renderingPage={Page.Cities} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
