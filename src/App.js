import React from 'react';
import './App.css';

// importing components
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Testimonial from './components/Testimonial';
import Service from './components/Service';
import Latest from './components/Latest';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Testimonial />
      <Service />
      <Latest />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
