import { OfferData } from '../../types/offer';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { ratingToPercent } from '../../utils/common';
import PremiumLabel from '../premium-label/premium-label';
import PlaceCardBookmarkButton from '../place-cadr-bookmark-button/place-cadr-bookmark-button';

type Props = {
  offer: OfferData;
  onOffersItemHover(id: string): void;
}

export default function CitiesCard({ offer, onOffersItemHover }: Props): React.JSX.Element {

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => onOffersItemHover(offer.id)}
    >
      {offer.isPremium && <PremiumLabel />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <PlaceCardBookmarkButton offerId={offer.id} status={offer.isFavorite}/>
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
