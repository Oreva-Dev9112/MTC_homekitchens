import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import FeatureSection from './components/Feature';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <>
      <Header />
      <Slider />
      <FeatureSection />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
