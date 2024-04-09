import React from 'react';
import { Offer } from '../../types/offer';
import { CityName } from '../../const/const';
import Card from '../card/card';

type FavoritesListProps = {
  offers: Offer[];
}

type LiCompProps = {
  city: string;
  cityOffers?: Offer[];
}

function LiComp({ city, cityOffers }: LiCompProps): React.JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityOffers?.map((offer: Offer): React.JSX.Element => <Card key={offer.id} offer={offer} isOrdinaryCard={false} />)}
      </div>
    </li>
  );
}

function getCityOffers(cityName: CityName, offers: Offer[]): Offer[] | undefined {
  return offers.filter((offer: Offer): boolean => offer.city.name === cityName);
}

export default function FavoritesList({ offers }: FavoritesListProps): React.JSX.Element {
  const test = Object.values(CityName);
  return (
    <ul className="favorites__list">
      {test.map((name: CityName) => {
        const cityOffers = getCityOffers(name, offers);
        if (cityOffers && cityOffers.length > 0) {
          return <LiComp key={name} city={name} cityOffers={cityOffers} />;
        }
      })}
    </ul>
  );
}
