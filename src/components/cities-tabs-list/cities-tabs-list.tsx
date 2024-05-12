import React from 'react';
import CitiesTabsItem from '../cities-tabs-item/cities-tabs-item';
import { Cities } from '../../const/const';
import { useAppSelector } from '../../hooks/redux-ts';

export default function CitiesTabsList(): React.JSX.Element {

  const activeCity = useAppSelector((state) => state.activeCity);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Cities.map((city) => <CitiesTabsItem key={city.name} cityName={city.name} activeCityName={activeCity?.name}/>)}
          </ul>
        </section>
      </div>
    </>
  );
}
