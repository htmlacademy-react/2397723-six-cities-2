import React from 'react';
import { Offer } from '../../types/offer';
import { CardType, CityName } from '../../const/const';
import Card from '../card/card';

type FavoritesListProps = {
  favoriteOffers: Offer[];
  changeCurrentOffer: (id: string) => void;
}

type LiCompProps = {
  city: string;
  cityOffers?: Offer[];
  changeCurrentOffer: (id: string) => void;
}

function getCityOffers(cityName: CityName, favoriteOffers: Offer[]): Offer[] | undefined {
  return favoriteOffers.filter((offer: Offer): boolean => offer.city.name === cityName);
}

function CityOffers({ city, cityOffers, changeCurrentOffer }: LiCompProps): React.JSX.Element {
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
        {cityOffers?.map((offer: Offer): React.JSX.Element => (
          <Card
            key={offer.id}
            offer={offer}
            cardType={CardType.Favorites}
            changeCurrentOffer={changeCurrentOffer}
          />))}
      </div>
    </li>
  );
}

export default function FavoritesList({ favoriteOffers, changeCurrentOffer }: FavoritesListProps): React.JSX.Element {
  const test = Object.values(CityName);
  return (
    <ul className="favorites__list">
      {test.map((name: CityName) => {
        const cityOffers = getCityOffers(name, favoriteOffers);
        if (cityOffers && cityOffers.length > 0) {
          return (
            <CityOffers
              key={name}
              city={name}
              cityOffers={cityOffers}
              changeCurrentOffer={changeCurrentOffer}
            />);
        }
      })}
    </ul>
  );
}
