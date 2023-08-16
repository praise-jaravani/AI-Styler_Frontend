import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from 'react';
import './App.css';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Footer from "./components/Footer.tsx";
import StyleOutput from "./pages/StyleOutput.tsx";

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/style-output" element={<StyleOutput/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
