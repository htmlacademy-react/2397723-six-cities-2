import React from 'react';
import { OfferData } from '../../types/offer';
import FavoritesCard from '../favorites-card/favorites-card';

type Props = {
  offers: OfferData[];
  changeCurrentOffer: (id: string) => void;
}

export default function FavoritesPlaces({ offers, changeCurrentOffer }: Props): React.JSX.Element {
  return (
    <div className="favorites__places">
      {offers.map((offer: OfferData): React.JSX.Element => (
        <FavoritesCard
          key={offer.id}
          offer={offer}
          changeCurrentOffer={changeCurrentOffer}
        />))}
    </div>
  );
}