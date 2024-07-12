import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeActiveCity } from '../../store/app-data/app-data';
import { Link } from 'react-router-dom';
import { getActiveCity } from '../../store/app-data/app-data.selectors';

type Props = {
  cityName: string;
}

export function CitiesTabsItem({ cityName }: Props): React.JSX.Element {
  const activeCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  const handleActiveCityChange = () => {
    dispatch(changeActiveCity(cityName));
  };

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${cityName === activeCity?.name ? 'tabs__item--active' : ''}`}
        to='..'
        onClick={handleActiveCityChange}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
}
