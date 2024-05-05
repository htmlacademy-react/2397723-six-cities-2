import React from 'react';
import { Review } from '../../types/reviews';
import ReviewsItem from '../reviews-item/reviews-item';

type Props = {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: Props): React.JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}
