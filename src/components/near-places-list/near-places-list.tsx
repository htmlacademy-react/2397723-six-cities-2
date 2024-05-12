import React from 'react';
import NearPlacesCard from '../near-places-card/near-places-card';
import { OfferData } from '../../types/offer';

type Props = {
  nearPlaces: OfferData[];
}

export default function NearPlacesList({ nearPlaces }: Props): React.JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          nearPlaces.map((place) => (
            <NearPlacesCard
              key={place.id}
              offer={place}
            />
          )
          )
        }
      </div>
    </section>
  );
}
