import React from 'react';
import { OfferData } from '../../types/offer';
import { CityName } from '../../const/const';
import FavoritesPlaces from '../favorites-location-item/favorites-location-item';
import { getCityOffers } from '../../utils/common';

type Props = {
  favoriteOffers: OfferData[];
}

export default function FavoritesList({ favoriteOffers }: Props): React.JSX.Element {
  const cities = Object.values(CityName);
  return (
    <ul className="favorites__list">
      {cities.map((name: CityName) => {
        const cityOffers = getCityOffers(name, favoriteOffers);
        if (cityOffers && cityOffers.length > 0) {
          return (
            <li key={name} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{name}</span>
                  </a>
                </div>
              </div>
              <FavoritesPlaces
                offers={cityOffers}
              />
            </li>);
        }
      })}
    </ul>
  );
}
