import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReview } from '../../store/api-actions';
import { changeComment, changeRating } from '../../store/reviews-data/reviews-data';
import { RatingInput } from '../../components';
import { getIsReviewsLoading, getNewReview } from '../../store/reviews-data/reviews-data.selectors';

type RatingInput = {
  value: number;
  title: string;
}

type Props = {
  offerId: string;
}

const ratingInputs: RatingInput[] = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good'
  },
  {
    value: 3,
    title: 'not bad'
  },
  {
    value: 2,
    title: 'badly'
  },
  {
    value: 1,
    title: 'terribly'
  }
];

const INITIAL_RATING = null;
const MIN_COMMENT_LENGTH = 50;

export function CommentForm({ offerId }: Props): React.JSX.Element {
  const dispatch = useAppDispatch();
  const isReviewSanding = useAppSelector(getIsReviewsLoading);
  const comment = useAppSelector(getNewReview).comment;
  const rating = useAppSelector(getNewReview).rating;
  const examConditions = (): boolean => rating === INITIAL_RATING || comment.length < MIN_COMMENT_LENGTH || isReviewSanding;

  const handleRatingChange = (value: number): void => {
    dispatch(changeRating(Number(value)));
  };
  const handleCommentChange = (value: string): void => {
    dispatch(changeComment(value));
  };
  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addReview({ offerId, comment, rating }));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ratingInputs.map((input) => <RatingInput key={input.value} rating={rating} value={input.value} title={input.title} onInputChange={handleRatingChange} />)
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(event) => handleCommentChange(event.target.value)}
        value={comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={examConditions()}>Submit</button>
      </div>
    </form>
  );
}
