import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-ts';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useNavigate } from 'react-router-dom';
import { setFavoriteStatus } from '../../store/api-actions';

type Props = {
  offerId: string;
  status: boolean;
};

export default function BookmarkButton({ offerId, status }: Props): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const addFavoriteHandler = () => {
    dispatch(setFavoriteStatus({ offerId, status }));
  };

  const redirectToLogin = () => {
    navigate(AppRoute.Login);
  };

  return (
    <button
      className={`${status ? 'place-card__bookmark-button--active' : ''} place-card__bookmark-button button`}
      type="button"
      onClick={isAuth ? addFavoriteHandler : redirectToLogin}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        < use xlinkHref="#icon-bookmark" ></use >
      </svg >
      <span className="visually-hidden">To bookmarks</span>
    </button >
  );
}
