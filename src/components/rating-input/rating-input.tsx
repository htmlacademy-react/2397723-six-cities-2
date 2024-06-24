type RatingInputProps = {
  rating: number | null;
  value: number;
  title: string;
  handleInputChange: (value: number) => void | undefined;
}

export default function RatingInput({ rating, value, title, handleInputChange }: RatingInputProps): React.JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={() => handleInputChange(value)}
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
