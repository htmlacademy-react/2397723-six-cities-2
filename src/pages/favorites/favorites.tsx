import React from 'react';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { Offer } from '../../types/offer';


type FavoritesProps = {
  offers: Offer[];
  changeCurrentOffer: (id: string) => void;
}

export default function Favorites({ offers, changeCurrentOffer }: FavoritesProps): React.JSX.Element {
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoriteOffers={offers} changeCurrentOffer={changeCurrentOffer}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
