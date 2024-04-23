import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../pages/app-routes';
import { Offer } from '../../types/offer';
import React from 'react';

type AppProps = {
  placesCount: number;
  offers: Offer[];
}

function App({ placesCount, offers }: AppProps): React.JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes placesCount={placesCount} offers={offers} />
    </BrowserRouter>
  );
}

export default App;
