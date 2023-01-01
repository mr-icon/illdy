import React from 'react';
import './App.css';

// importing components
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Testimonial />
    </div>
  );
}

export default App;
