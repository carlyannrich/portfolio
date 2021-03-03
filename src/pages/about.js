import React from 'react';

import Header from '../components/Header/index';
import Section from '../components/Section/index';
import Footer from '../components/Footer/index';
import MenuComplete from '../components/MenuComplete/index';

const aboutContent = {
  section: [
    {
      id: 1,
      content: 'testing',
      label: 'testing',
    },
  ],
};

const AboutPage = () => (
  <page className="Home">
    <MenuComplete />
    <header>
      <Header size="small" />
    </header>

    <div>
      {aboutContent?.section?.map((section) => (
        <Section key={section?.id} {...section} />
      ))}
    </div>

    <footer>
      <Footer primary />
    </footer>
  </page>
);

export default AboutPage;
