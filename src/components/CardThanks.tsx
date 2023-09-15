import "./CardThankStyles.css";
import ThanksImage from "../assets/images/illustration-thank-you.svg";

import { useParams } from "react-router-dom";
export default function CardThanks() {
  const { rating } = useParams();
  return (
    <div className="card__thanks">
      <div className="card__thanks_img">
        <img src={ThanksImage} alt="Thank's" />
      </div>
      <div className="card__thanks_subtitle">
        <p>You selected {rating} out of 5</p>
      </div>
      <div className="card__thanks__title">
        <h2>Thank you!</h2>
      </div>
      <div className="card__thanks__body">
        <p className="card__thanks__body_text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
