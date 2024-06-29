import CitiesCard from '../cities-card/cities-card';
import { OfferData } from '../../types/offer';

type Props = {
  offers: OfferData[];
}

export default function CitiesCardList({ offers }: Props): React.JSX.Element {
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
