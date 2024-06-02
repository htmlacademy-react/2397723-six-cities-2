import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-ts';
import { logout } from '../../store/api-actions';

export default function HeaderNav(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const favoritesLength = useAppSelector((state) => state.FAVORITES.favorites.length);
  const user = useAppSelector((state) => state.USER.user);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ?
          <>
            <li className="header__nav-item user">
              <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{user?.email}</span>
                <span className="header__favorite-count">{favoritesLength}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                <span className="header__signout" onClick={logoutHandler}>Sign out</span>
              </a>
            </li>
          </> :
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.Login}>
              <span className="header__signout">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}
