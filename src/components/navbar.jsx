import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">Gold <span>tech</span></div>

            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <div className="single-nav-link" id="home-link">
                    <NavLink 
                        to="/" 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Home
                    </NavLink>
                </div>
                <div className="single-nav-link" id="about-link">
                    <NavLink 
                        to="/about" 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        About
                    </NavLink>
                </div>
                <div className="single-nav-link" id="projects-link">
                    <NavLink 
                        to="/projects" 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Projects
                    </NavLink>
                </div>
                <div className="single-nav-link" id="skills-link">
                    <NavLink 
                        to="/skills" 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Skills
                    </NavLink>
                </div>
                <div className="single-nav-link" id="contact-link">
                    <NavLink 
                        to="/contact" 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
    );
}

export default Navbar;
