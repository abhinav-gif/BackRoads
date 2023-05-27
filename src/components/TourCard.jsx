import React from "react";
import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

const TourCard = (props) => {
  const { imgId, date, heading, para, location, days, price } = props;
  const images = [tour1, tour2, tour3, tour4];
  return (
    <article class="tour-card">
      <div class="tour-img-container">
        <img src={images[imgId - 1]} class="tour-img" alt={heading} />
        <p class="tour-date">{date}</p>
      </div>
      <div class="tour-info">
        <h4>{heading}</h4>
        <p>{para}</p>
        <div class="tour-footer">
          <p>
            <span>
              <i class="fas fa-map"></i>
            </span>{" "}
            {location}
          </p>
          <p>{days}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default TourCard;
