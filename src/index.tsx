import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppProps = {
  placesCount: 312,
  offers: offers
} as const;

root.render(
  <React.StrictMode>
    <App placesCount={AppProps.placesCount} offers={AppProps.offers} />
  </React.StrictMode>
);
