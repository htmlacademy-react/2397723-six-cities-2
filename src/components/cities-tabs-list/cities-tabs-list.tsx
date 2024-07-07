import React from 'react';
import { CitiesTabsItem } from '../../components';
import { Cities } from '../../const/const';

export default function CitiesTabsList(): React.JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Cities.map((city) => (
              <CitiesTabsItem
                key={city.name}
                cityName={city.name}
              />))}
          </ul>
        </section>
      </div>
    </>
  );
}
