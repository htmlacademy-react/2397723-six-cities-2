import React, { memo } from 'react';
import { CitiesCard } from '../../components';
import { OfferData } from '../../types';

type Props = {
  nearPlaces: OfferData[];
}

function NearPlacesListComponent({nearPlaces}: Props): React.JSX.Element {
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

export const NearPlacesList = memo(NearPlacesListComponent);
