import React from 'react';
import './App.css';

import {Header, Attributes, Possibility, WhatGPT, Blog, Footer} from './containers';
import {Navbar, Brand, CTA} from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Attributes />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;