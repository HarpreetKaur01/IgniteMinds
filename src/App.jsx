import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";

import instrutorPhoto from "./assets/instructor.jpg";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Testimonial from "./pages/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    
    <Router>
      <ScrollToTop/>
      <Navbar />
      <main className="main-wrapper">
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
