import React from 'react';

import Header from '../components/Header/index';
import Section from '../components/Section/index';
import Footer from '../components/Footer/index';
import MenuComplete from '../components/MenuComplete/index';

const homeContent = {
  section: [
    {
      id: 1,
      content: "Hi! I'm Carly, and I am a qualified software tester, working in the UK education and library sector. I am based in Manchester, UK. I am also a developer in training, currently learning Javascript and React.",
      label: 'Take a look at my projects',
    },
    {
      id: 2,
      content: 'I am a researcher in the History of Astronomy and my research interests lie in paper astronomical instruments of the early modern period, particularly volvelles.',
      label: 'Find out about my research',
    },
    {
      id: 3,
      content: 'I worked in a Special Collections library for several years and discovered a love of Paper Marbling. Also, I began creating reproductions of early modern engravings.',
      label: 'View my art',
    },
  ],
};

const Home = () => (
  <page className="Home">
    <MenuComplete />
    <header>
      <Header size="small" />
    </header>

    <div>
      {homeContent?.section?.map((section) => (
        <Section key={section?.id} {...section} />
      ))}
    </div>

    <footer>
      <Footer primary />
    </footer>
  </page>
);

Home.propTypes = {

};

export default Home;
