import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Skills from "./pages/Skills.jsx";
import ThemeButton from "./Components/Themebtn.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ThemeButton/>
      {/* <CircleProgress  /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <div className="back-glow"></div>
      
    </>
  );
}

export default App;
