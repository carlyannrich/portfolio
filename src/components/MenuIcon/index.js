import React from 'react';

import './MenuIcon.css';
import image from '../assets/menu.svg';

const MenuIcon = ({ src = image, alt = '' }) => (
  <section className="menu-wrapper">
    <div className="menu">
      <img src={src} className="icon-div" alt={alt} />
    </div>
  </section>
);

MenuIcon.propTypes = {
  src: image,
  alt: '',
};

export default MenuIcon;
