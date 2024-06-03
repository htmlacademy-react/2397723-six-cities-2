import { OfferData } from '../../types/offer';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import PremiumLabel from '../premium-label/premium-label';
import { ratingToPercent } from '../../utils/common';
import PlaceCardBookmarkButton from '../place-cadr-bookmark-button/place-cadr-bookmark-button';

type Props = {
  offer: OfferData;
}

export default function FavoritesCard({ offer }: Props): React.JSX.Element {

  return (
    <article
      className="favorites__card place-card"
    >
      {offer.isPremium && <PremiumLabel />}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <PlaceCardBookmarkButton offerId={offer.id} status={offer.isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingToPercent(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article >
  );
}
