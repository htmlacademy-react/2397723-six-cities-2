import { OfferData } from '../../types';
import { CitiesCard } from '../../components';

type Props = {
  offers: OfferData[];
}

export function CitiesCardList({ offers }: Props): React.JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}
