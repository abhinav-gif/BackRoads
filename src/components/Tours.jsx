import React from "react";
import TourCard from "./TourCard";
import { tours } from "../data";

const Tours = () => {
  return (
    <section class="section" id="tours">
      <div class="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div class="section-center featured-center">
        {tours.map((tour) => {
          return <TourCard {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
