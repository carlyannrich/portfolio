import React from 'react';
import Page from '../components/Page';

const content = 'I am a software tester and developer in training, working in the UK education and library sector.';
const content2 = 'I am a researcher in the History of Astronomy and my research interests lie in paper astronomical instruments of the early modern period, particularly volvelles.';
const content3 = 'I worked in a special collections library for several years and discovered a love of paper marbling. Also, I began creating reproductions of early modern engravings. This formed the basis of the concept Cosmographia.';

const label = 'Take a look at my projects';

const Home = () => (
  <div className="Home">
    <Page
      content={content}
      content2={content2}
      content3={content3}
      label={label}
    />
  </div>
);
export default Home;
