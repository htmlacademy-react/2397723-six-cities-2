import React from 'react';
import { NearPlacesCard } from '../../components';
import { OfferData } from '../../types';

type Props = {
  nearPlaces: OfferData[];
}

export function NearPlacesList({ nearPlaces }: Props): React.JSX.Element {
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
