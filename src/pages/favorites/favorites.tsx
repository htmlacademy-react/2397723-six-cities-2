import React, { useEffect } from 'react';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-ts';
import { useParams } from 'react-router-dom';
import { fetchFavorites } from '../../store/api-actions';

export default function Favorites(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const currentOffer = useParams();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch, currentOffer.id]);
  const favorites = useAppSelector((state) => state.FAVORITES.favorites);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoriteOffers={favorites} />
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
