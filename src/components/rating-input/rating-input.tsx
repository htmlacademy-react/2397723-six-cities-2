type Props = {
  rating: number | null;
  value: number;
  title: string;
  onInputChange: (value: number) => void | undefined;
}

export function RatingInput({ rating, value, title, onInputChange }: Props): React.JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={() => onInputChange(value)}
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
