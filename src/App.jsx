import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsAppIcon from './components/WhatsAppIcon';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
const Home = React.lazy(() => import('./components/Home/Home'));
const AboutUs = React.lazy(() => import('./components/AboutUs/AboutUs'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Villas = React.lazy(() => import('./components/Villa/Villas'));
const SingleVilla = React.lazy(() => import('./components/Villa/SingleVilla'));

const App = () => {
  return (
    <>
      <div>
        <WhatsAppIcon />
      </div>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/villa/:id" element={<SingleVilla />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

export default App;
