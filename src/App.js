import React from 'react';
import './App.css';

import {Header, Features, Possibility, WhatGPT, Blog, Footer} from './containers';
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
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;