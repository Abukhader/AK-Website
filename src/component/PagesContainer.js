// src/components/PagesContainer.js

import React from 'react';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';

const PagesContainer = () => {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default PagesContainer;
