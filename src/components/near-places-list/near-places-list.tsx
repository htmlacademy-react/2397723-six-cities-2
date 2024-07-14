import React from 'react';
import { CitiesCard } from '../../components';
import { OfferData } from '../../types';

type Props = {
  nearPlaces: OfferData[];
}

export function NearPlacesList({nearPlaces}: Props): React.JSX.Element {
  return (
    <div className="near-places__list places__list">
      {
        nearPlaces.map((place) => (
          <CitiesCard
            key={place.id}
            offer={place}
            className='near-places'
          />))
      }
    </div>
  );
}
