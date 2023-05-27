import React from "react";

const NavIcons = ({ iconClass, href }) => {
  return (
    <li>
      <a href={href} target="_blank" class="nav-icon" rel="noreferrer">
        <i class={iconClass}></i>
      </a>
    </li>
  );
};

export default NavIcons;
