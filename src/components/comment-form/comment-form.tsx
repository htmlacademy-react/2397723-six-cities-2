import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-ts';
import { addReview } from '../../store/api-actions';
import { changeComment, changeRating } from '../../store/reviews-data/reviews-action';

type RatingInput = {
  value: number;
  title: string;
}

type RatingInputProps = {
  rating: number | null;
  value: number;
  title: string;
  handleInputChange: (value: number) => void | undefined;
}

type CommentFormProps = {
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

function RatingInput({ rating, value, title, handleInputChange }: RatingInputProps): React.JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={() => handleInputChange(Number(value))}
        checked={value === rating}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default function CommentForm({ offerId }: CommentFormProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const isReviewSanding = useAppSelector((state) => state.REVIEWS.isReviewSanding);
  const comment = useAppSelector((state) => state.REVIEWS.newReview.comment);
  const rating = useAppSelector((state) => state.REVIEWS.newReview.rating);

  const ratingChangeHandler = (value: number): void => {
    dispatch(changeRating(Number(value)));
  };
  const commentChangeHandler = (value: string): void => {
    dispatch(changeComment(value));
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addReview({ offerId, comment, rating }));
  };

  const examConditions = (): boolean => rating === INITIAL_RATING || comment.length < MIN_COMMENT_LENGTH || isReviewSanding;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ratingInputs.map((input) => <RatingInput key={input.value} rating={rating} value={input.value} title={input.title} handleInputChange={ratingChangeHandler} />)
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(event) => commentChangeHandler(event.target.value)}
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
