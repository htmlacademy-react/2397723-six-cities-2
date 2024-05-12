import React from 'react';
import { OfferData } from '../../types/offer';
import FavoritesCard from '../favorites-card/favorites-card';

type Props = {
  offers: OfferData[];
}

export default function FavoritesPlaces({ offers }: Props): React.JSX.Element {
  return (
    <div className="favorites__places">
      {offers.map((offer: OfferData): React.JSX.Element => (
        <FavoritesCard
          key={offer.id}
          offer={offer}
        />))}
    </div>
  );
}
