import { CitiesCard } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeHoveredOffer } from '../../store/app-data/app-data';
import { getSortedOffers } from '../../store/offers-data/offers-data.selectors';

export function CitiesCardList(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getSortedOffers);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          offer={offer}
          className='cities'
          onMouseEnter={() => dispatch(changeHoveredOffer(offer))}
        />
      ))}
    </div>
  );
}
