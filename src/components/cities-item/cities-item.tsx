import React from 'react';

type Props = {
  cityName: string;
  activeCityName: string | undefined;
}

export default function CitiesItem({ cityName, activeCityName }: Props): React.JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${cityName === activeCityName ? 'tabs__item--active' : ''}`} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}
