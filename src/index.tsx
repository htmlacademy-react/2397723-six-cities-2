import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppProps = {
  placesCount: 312,
  offers: offers,
  reviews: reviews
} as const;

root.render(
  <React.StrictMode>
    <App placesCount={AppProps.placesCount} offers={AppProps.offers} reviews={reviews}/>
  </React.StrictMode>
);
