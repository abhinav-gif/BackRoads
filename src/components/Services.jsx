import React from "react";
import Service from "./Service";
import { servicesObj } from "../data";

const Services = () => {
  return (
    <section class="section services" id="services">
      <div class="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div class="section-center services-center">
        {servicesObj.map((service) => {
          return <Service service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
