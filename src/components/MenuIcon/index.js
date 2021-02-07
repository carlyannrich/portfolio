import React from "react";

import PropTypes from "prop-types";
import "./MenuIcon.css";
import image from "../assets/menu.svg";

const MenuIcon = ({ src = image, alt = "" }) => {
  return (
    <section className="menu-wrapper">
      <div className="menu">
        <img src={src} className="icon-div" alt={alt} />
      </div>
    </section>
  );
};

MenuIcon.propTypes = {
  onClick: PropTypes.func,
};

export default MenuIcon;
