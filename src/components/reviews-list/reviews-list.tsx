import React from 'react';
import { Review } from '../../types';
import { ReviewsItem } from '../../components';

type Props = {
  reviews: Review[];
}

export function ReviewsList({ reviews }: Props): React.JSX.Element {
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
