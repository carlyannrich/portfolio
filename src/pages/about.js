import React from 'react';

import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import MenuIcon from '../components/MenuComplete/MenuIcon/index';

const AboutPage = () => (
  <page className="Home">
    <MenuIcon />
    <header>
      <Header />
    </header>
    <footer>
      <Footer primary="true" />
    </footer>
  </page>
);
export default AboutPage;
