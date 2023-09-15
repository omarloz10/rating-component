import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconStar from "../assets/images/icon-star.svg";
import "./CardRatingStyles.css";
import RatingElement from "./RatingElement";

export default function CardRating() {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const redirect = () => {
    if (rating == 0) return;
    navigate(`/thanks/${rating}`);
  };

  const asingRating = (value: number) => {
    setRating(value);
  };

  return (
    <div className="card__rating">
      <div className="card__rating__star">
        <img src={IconStar} alt="Star Icon" />
      </div>
      <div className="card__rating__title">
        <h2 className="card__rating__title_text">How did we do?</h2>
      </div>
      <div className="card__rating__body">
        <div className="card__rating__body_text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>
        <div className="card__rating__body_rating">
          <RatingElement
            value={1}
            asingRating={asingRating}
            rating={rating}
          ></RatingElement>
          <RatingElement
            value={2}
            asingRating={asingRating}
            rating={rating}
          ></RatingElement>
          <RatingElement
            value={3}
            asingRating={asingRating}
            rating={rating}
          ></RatingElement>
          <RatingElement
            value={4}
            asingRating={asingRating}
            rating={rating}
          ></RatingElement>
          <RatingElement
            value={5}
            asingRating={asingRating}
            rating={rating}
          ></RatingElement>
        </div>
      </div>
      <div className="card__rating__footer">
        <input type="hidden" name="rating" id="rating" value="5" />
        <button
          className="card__rating__footer_button_submit"
          onClick={redirect}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
