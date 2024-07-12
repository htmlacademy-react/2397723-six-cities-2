import React from 'react';
import { CitiesCard } from '../../components';
import { useAppSelector } from '../../hooks';
import { getNearPlaces } from '../../store/near-places-data/near-places-data.selectors';

export function NearPlacesList(): React.JSX.Element {
  const nearPlaces = useAppSelector(getNearPlaces);

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
