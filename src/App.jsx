import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import Skills from "./pages/skills.jsx";
import ThemeButton from "./components/themebtn.jsx";
import Navbar from "./components/navbar.jsx"


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
