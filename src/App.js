import React, { Component } from 'react';
import Header from 'components/Header';
import Hero from 'components/Hero';
import AboutMe from 'components/AboutMe';
import Portfolio from 'components/Portfolio';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
