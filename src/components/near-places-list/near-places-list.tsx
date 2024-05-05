import React from 'react';
import NearPlacesCard from '../near-places-card/near-places-card';
import { OfferData } from '../../types/offer';

type Props = {
  nearOffers: OfferData[];
  changeCurrentOffer: (id: string | undefined) => void;
}

export default function NearPlacesList({ nearOffers, changeCurrentOffer }: Props): React.JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          nearOffers.map((nearOffer) => (
            <NearPlacesCard
              key={nearOffer.id}
              offer={nearOffer}
              changeCurrentOffer={changeCurrentOffer}
            />
          )
          )
        }
      </div>
    </section>
  );
}
