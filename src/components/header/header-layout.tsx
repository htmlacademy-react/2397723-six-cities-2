import { Link, Outlet } from 'react-router-dom';
import HeaderNav from '../header-nav/header-nav';
import { AppRoute } from '../../const/const';
import { useAppSelector } from '../../hooks/redux-ts';
import Spinner from '../spinner/spinner';

export default function HeaderLayout(): React.JSX.Element {
  const isOffersLoading = useAppSelector((state) => state.OFFERS.isOffersLoading);
  const isOfferLoading = useAppSelector((state) => state.OFFER.isOfferLoading);
  const isNearPlacesLoading = useAppSelector((state) => state.NEAR_PLACES.isNearPlacesLoading);
  const isFavoritesLoading = useAppSelector((state) => state.FAVORITES.isFavoritesLoading);
  const isStatusLoading = useAppSelector((state) => state.FAVORITES.isStatusSanding);
  const isReviewsLoading = useAppSelector((state) => state.REVIEWS.isReviewsLoading);
  const isReviewsSanding = useAppSelector((state) => state.REVIEWS.isReviewSanding);
  const isCheckAuthLoading = useAppSelector((state) => state.USER.isCheckAuthLoading);
  const isLoginLoading = useAppSelector((state) => state.USER.isLoginLoading);
  const isLogoutLoading = useAppSelector((state) => state.USER.isLogoutLoading);

  const isLoading =
    isOffersLoading
    || isOfferLoading
    || isNearPlacesLoading
    || isFavoritesLoading
    || isStatusLoading
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
