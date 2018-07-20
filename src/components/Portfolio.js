import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
