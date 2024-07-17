import { useAppSelector } from '../../hooks';
import { getActiveCity } from '../../store/app-data/app-data.selectors';
import { getOffersByCity } from '../../store/offers-data/offers-data.selectors';

export function PlacesFound(): JSX.Element {
  const offersByCity = useAppSelector(getOffersByCity);
  const activeCity = useAppSelector(getActiveCity);

  return (
    <b className="places__found">{offersByCity.length} places to stay in {activeCity?.name}</b>
  );
}
