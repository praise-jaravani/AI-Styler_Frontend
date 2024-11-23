import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import StyleSelection from "./pages/StyleSelection";
import CustomBuilder from "./pages/CustomBuilder";

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/style-presets" element={<StyleSelection/>} />
        <Route path="/custom-builder" element={<CustomBuilder/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
