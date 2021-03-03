import React from 'react';

import Header from '../components/Header/index';
import Section from '../components/Section/index';
import Footer from '../components/Footer/index';
import MenuComplete from '../components/MenuComplete/index';

const homeContent = {
  section: [
    {
      id: 1,
      content: 'I am a software tester and developer in training, working in the UK education and library sector.',
      label: 'Take a look at my projects',
    },
    {
      id: 2,
      content: 'I am a researcher in the History of Astronomy and my research interests lie in paper astronomical instruments of the early modern period, particularly volvelles.',
      label: 'Take a look at my projects',
    },
    {
      id: 3,
      content: 'I worked in a special collections library for several years and discovered a love of paper marbling. Also, I began creating reproductions of early modern engravings. This formed the basis of the concept Cosmographia.',
      label: 'Take a look at my projects',
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
