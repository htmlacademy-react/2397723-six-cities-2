import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useNavigate } from 'react-router-dom';
import { setFavoriteStatus } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-data/user-data.selectors';

type Props = {
  offerId: string;
  status: boolean;
};

export function OfferBookmarkButton({ offerId, status }: Props): React.JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const handleAddFavorite = () => {
    dispatch(setFavoriteStatus({ offerId, status }));
  };

  const handleRedirectToLogin = () => {
    navigate(AppRoute.Login);
  };

  return (
    <button
      className={`${status ? 'offer__bookmark-button--active' : ''} offer__bookmark-button button`}
      type="button"
      onClick={isAuth ? handleAddFavorite : handleRedirectToLogin}
    >
      <svg className="offer__bookmark-icon" width="31" height="33">
        < use xlinkHref="#icon-bookmark" ></use >
      </svg >
      <span className="visually-hidden">To bookmarks</span>
    </button >
  );
}
