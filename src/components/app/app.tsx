import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../pages/app-routes';
import { OfferData } from '../../types/offer';
import React from 'react';
import { Review } from '../../types/reviews';

type Props = {
  placesCount: number;
  offers: OfferData[];
  reviews: Review[];
}

function App({ placesCount, offers, reviews }: Props): React.JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes placesCount={placesCount} offers={offers} reviews={reviews}/>
    </BrowserRouter>
  );
}

export default App;
