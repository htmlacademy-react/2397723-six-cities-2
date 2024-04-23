import { useState } from 'react';
import CitiesCard from '../cities-card/cities-card';
import { Offer } from '../../types/offer';


type CardListProps = {
  offers: Offer[];
  changeCurrentOffer: (id: string) => void;
}

export default function CitiesCardList({ offers, changeCurrentOffer }: CardListProps): React.JSX.Element {
  const [active, setActive] = useState<string>();
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          offer={offer}
          setActive={setActive}
          changeCurrentOffer={changeCurrentOffer}
        />
      ))};
    </div>
  );
}
