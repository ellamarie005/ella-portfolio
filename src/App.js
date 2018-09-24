import React, { Component } from 'react';
import Header from 'components/Header';
import Hero from 'components/Hero';
import AboutMe from 'components/AboutMe';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <AboutMe />
      </div>
    );
  }
}

export default App;
