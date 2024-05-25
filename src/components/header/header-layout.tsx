import { Link, Outlet, useLocation } from 'react-router-dom';
import HeaderNav from '../header-nav/header-nav';
import { AppRoute } from '../../const/const';
import { useAppSelector } from '../../hooks/redux-ts';
import Spinner from '../spinner/Spinner';

export default function HeaderLayout(): React.JSX.Element {
  const location = useLocation();
  const isLoading = useAppSelector((state) => state.isLoading);

  return (
    < div className="page page--gray page--main" >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
                {isLoading ? <Spinner/> : <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />}
              </Link>
            </div>
            {location.pathname !== AppRoute.Login && <HeaderNav />}
          </div>
        </div>
      </header>
      <Outlet />
    </div >
  );
}
