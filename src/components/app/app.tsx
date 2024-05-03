import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../pages/app-routes';
import { Offer } from '../../types/offer';
import React from 'react';

type Props = {
  placesCount: number;
  offers: Offer[];
}

function App({ placesCount, offers }: Props): React.JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes placesCount={placesCount} offers={offers} />
    </BrowserRouter>
  );
}

export default App;
