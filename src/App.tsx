import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Footer from "./components/Footer";
import StyleOutput from "./pages/StyleOutput";
import ContactUs from "./pages/ContactUs";
import StyleSelection from "./pages/StyleSelection";

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/style-output" element={<StyleOutput/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/style-presets" element={<StyleSelection/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
