import React from "react";

const Service = (props) => {
  const { title, text, icon } = props.service;
  return (
    <article class="service">
      <span class="service-icon">
        <i class={icon}></i>
      </span>
      <div class="service-info">
        <h4 class="service-title">{title}</h4>
        <p class="service-text">{text}</p>
      </div>
    </article>
  );
};

export default Service;
