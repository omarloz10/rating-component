export default function RatingElement({ value, asingRating, rating }: any) {
  return (
    <div
      className={`card__rating__body_rating ${rating === value && "active"}`}
      onClick={() => asingRating(value)}
    >
      {value}
    </div>
  );
}
