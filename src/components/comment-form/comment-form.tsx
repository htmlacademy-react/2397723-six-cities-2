import { useState } from 'react';

type ratingInput = {
  value: string;
  title: string;
}

type Props = {
  value: string;
  title: string;
  handleInputChange: (value: string) => void | undefined;
}

const ratingInputs: ratingInput[] = [
  {
    value: '5',
    title: 'perfect',
  },
  {
    value: '4',
    title: 'good'
  },
  {
    value: '3',
    title: 'not bad'
  },
  {
    value: '2',
    title: 'badly'
  },
  {
    value: '1',
    title: 'terribly'
  }
];

const INITIAL_RATING = '0';
const INITIAL_COMMENT = '';
const MIN_COMMENT_LENGTH = 50;

function RatingInput({ value, title, handleInputChange }: Props): React.JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={() => handleInputChange(value)}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default function CommentForm(): React.JSX.Element {


  const [comment, setComment] = useState<string>(INITIAL_COMMENT);
  const [rating, setRating] = useState<string>(INITIAL_RATING);

  const inputChangeHandler = (value: string): void => {
    setRating(value);
  };

  const examConditions = (): boolean => rating === INITIAL_RATING || comment.length < MIN_COMMENT_LENGTH;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ratingInputs.map((input) => <RatingInput key={input.value} value={input.value} title={input.title} handleInputChange={inputChangeHandler} />)
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(event) => setComment(event.target.value)}
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
