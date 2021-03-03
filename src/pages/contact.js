import React from 'react';

import Header from '../components/Header/index';
import Section from '../components/Section/index';
import Footer from '../components/Footer/index';
import MenuComplete from '../components/MenuComplete/index';

const contactContent = {
  section: [
    {
      id: 1,
      content: 'Why not contact me on Twitter?',
      label: 'Click here for Twitter',
    },
  ],
};

const ContactPage = () => (
  <page className="Home">
    <MenuComplete />
    <header>
      <Header size="small" />
    </header>

    <div>
      {contactContent?.section?.map((section) => (
        <Section key={section?.id} {...section} />
      ))}
    </div>

    <footer>
      <Footer primary />
    </footer>
  </page>
);
export default ContactPage;
