import { Link, Outlet } from 'react-router-dom';
import { HeaderNav, Spinner } from '../../components';
import { AppRoute } from '../../const/const';
import { useAppSelector } from '../../hooks';
import { getFavoritesLoading, getIsStatusSanding } from '../../store/favorites-data/favorites-data.selectors';
import { getIsNearPlacesLoading } from '../../store/near-places-data/near-places-data.selectors';
import { getIsOfferLoading } from '../../store/offer-data/offer-data.selectors';
import { getIsOffersLoading } from '../../store/offers-data/offers-data.selectors';
import { getIsReviewSanding, getIsReviewsLoading } from '../../store/reviews-data/reviews-data.selectors';
import { getIsCheckAuthLoading, getIsLoginLoading, getIsLogoutLoading } from '../../store/user-data/user-data.selectors';
import React, { memo } from 'react';

function HeaderLayoutComponent(): React.JSX.Element {
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const isNearPlacesLoading = useAppSelector(getIsNearPlacesLoading);
  const isFavoritesLoading = useAppSelector(getFavoritesLoading);
  const isStatusSanding = useAppSelector(getIsStatusSanding);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);
  const isReviewsSanding = useAppSelector(getIsReviewSanding);
  const isCheckAuthLoading = useAppSelector(getIsCheckAuthLoading);
  const isLoginLoading = useAppSelector(getIsLoginLoading);
  const isLogoutLoading = useAppSelector(getIsLogoutLoading);

  const isLoading =
    isOffersLoading
    || isOfferLoading
    || isNearPlacesLoading
    || isFavoritesLoading
    || isStatusSanding
    || isReviewsLoading
    || isReviewsSanding
    || isCheckAuthLoading
    || isLoginLoading
    || isLogoutLoading;

  return (
    < div className="page page--gray page--main" >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
                {isLoading ? <Spinner /> : <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />}
              </Link>
            </div>
            {!isLoginLoading && !isCheckAuthLoading && <HeaderNav />}
          </div>
        </div>
      </header>
      <Outlet />
    </div >
  );
}

export const HeaderLayout = memo(HeaderLayoutComponent);
