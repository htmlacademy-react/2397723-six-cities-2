import { CitiesCard } from '../../components';
import { useAppSelector } from '../../hooks';
import { getSortedOffers } from '../../store/offers-data/offers-data.selectors';

export function CitiesCardList(): React.JSX.Element {
  const offers = useAppSelector(getSortedOffers);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          offer={offer}
          className='cities'
        />
      ))}
    </div>
  );
}
