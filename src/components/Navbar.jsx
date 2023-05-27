import React from "react";
import logo from "../images/logo.svg";
import NavIcons from "./NavIcons";
import { navicons } from "../data";

const navbar = () => {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul class="nav-links" id="nav-links">
          <li>
            <a href="#home" class="nav-link">
              {" "}
              home{" "}
            </a>
          </li>

          <li>
            <a href="#about" class="nav-link">
              {" "}
              about{" "}
            </a>
          </li>

          <li>
            <a href="#services" class="nav-link">
              {" "}
              services{" "}
            </a>
          </li>

          <li>
            <a href="#tours" class="nav-link">
              {" "}
              tours
            </a>
          </li>
        </ul>

        <ul class="nav-icons">
          {navicons.map((obj) => {
            return <NavIcons iconClass={obj.icon} href={obj.href} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
