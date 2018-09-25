import React, { Component } from 'react';
import Header from 'components/Header';
import Hero from 'components/Hero';
import AboutMe from 'components/AboutMe';
import Portfolio from 'components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <AboutMe />
        <Portfolio />
      </div>
    );
  }
}

export default App;
