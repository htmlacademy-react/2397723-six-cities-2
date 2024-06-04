import React, { useEffect } from 'react';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-ts';
import { Link, useParams } from 'react-router-dom';
import { fetchFavorites } from '../../store/api-actions';
import { AppRoute } from '../../const/const';
import { OfferData } from '../../types/offer';

type NotEmptyFavoritesProps = {
  favorites: OfferData[];
}

function NotEmptyFavorites({ favorites }: NotEmptyFavoritesProps): React.JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList favoriteOffers={favorites} />
        </section>
      </div>
    </main>
  );
}

function EmptyFavorites(): React.JSX.Element {
  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function Favorites(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const currentOffer = useParams();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch, currentOffer.id]);
  const favorites = useAppSelector((state) => state.FAVORITES.favorites);

  return (
    <>
      {favorites.length > 0 ? <NotEmptyFavorites favorites={favorites} /> : <EmptyFavorites />}
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </>
  );
}
