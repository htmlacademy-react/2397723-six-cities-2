import React, { useEffect, useState } from 'react';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute, CardType } from '../../const/const';
import PremiumLabel from '../premium-label/premium-label';

//TODO Сделать функцию для расчета процентов рейтинга
//TODO Вынести в константы длину и ширину фото

type CardProps = {
  offer: Offer;
  cardType: CardType;
  changeCurrentOffer(id: string): void;
}

export default function Card({ offer, cardType, changeCurrentOffer }: CardProps): React.JSX.Element {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    setActive('b312baee-786b-43bd-9fba-c19f0da74abc');
  }, [active]);

  return (
    <article
      className={`${cardType}__card place-card`}
      style={{
        opacity: (cardType === CardType.Cities && active === offer.id) ? '0.6' : ''
      }}
    >
      {offer.isPremium && <PremiumLabel />}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardType === CardType.Favorites ? '150' : '260'}
            height={cardType === CardType.Favorites ? '110' : '200'}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${cardType === CardType.Favorites ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating / 5 * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer + offer.id} onClick={() => changeCurrentOffer(offer.id)}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article >
  );
}
