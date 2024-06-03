import PremiumLabel from '../../components/premium-label/premium-label';
import CommentForm from '../../components/comment-form/comment-form';
import { ratingToPercent } from '../../utils/common';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { AuthorizationStatus, Page } from '../../const/const';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-ts';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchNearPlaces, fetchOffer, fetchReviews } from '../../store/api-actions';
import OfferBookmarkButton from '../../components/offer-bookmark-button/offer-bookmark-button';

export default function Offer(): React.JSX.Element | undefined {

  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.OFFER.offer);
  const nearPlaces = useAppSelector((state) => state.NEAR_PLACES.nearPlaces);
  const reviews = useAppSelector((state) => state.REVIEWS.reviews);
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchNearPlaces(id));
      dispatch(fetchReviews(id));
    }
  }, [dispatch, id]);

  if (offer) {
    return (
      <div className="page">
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.map((image) => (

                  <div key={image} className="offer__image-wrapper">
                    <img className="offer__image" src={image} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium && <PremiumLabel isOfferMark />}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offer.title}
                  </h1>
                  <OfferBookmarkButton offerId={offer.id} status={offer.isFavorite} />
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: ratingToPercent(offer.rating) }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {offer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {offer.bedrooms}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {offer.goods.map((good) => <li key={good} className="offer__inside-item">{good}</li>)}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="offer__user-name">
                      {offer.host.name}
                    </span>
                    {offer.host.isPro &&
                      <span className="offer__user-status">
                        Pro
                      </span>}
                  </div>
                  <div className="offer__description">
                    {/* TODO каждое предложение в своем абзаце? */}
                    <p className="offer__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length}</span></h2>
                  {reviews && <ReviewsList reviews={reviews} />}
                  {authorizationStatus === AuthorizationStatus.Auth && <CommentForm offerId={offer.id} />}
                </section>
              </div>
            </div>
            <Map offers={nearPlaces} selectedOffer={undefined} renderingPage={Page.Offer} />
          </section>
          <div className="container">
            <NearPlacesList
              nearPlaces={nearPlaces}
            />
          </div>
        </main>
      </div>
    );
  }
}
