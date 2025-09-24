import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Link ki jagah NavLink
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">Gold <span>tech</span></div>

            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <div className="single-nav-link" id="home-link">
                    <span>
                        <NavLink 
                            to="/" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Home
                        </NavLink>
                    </span>
                </div>
                <div className="single-nav-link" id="about-link">
                    <span>
                        <NavLink 
                            to="/about" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            About
                        </NavLink>
                    </span>
                </div>
                <div className="single-nav-link" id="projects-link">
                    <span>
                        <NavLink 
                            to="/projects" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Projects
                        </NavLink>
                        <NavLink 
                            to="/projects" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Projects
                        </NavLink>
                    </span>
                </div>
                <div className="single-nav-link" id="skills-link">
                    <span>
                        <NavLink 
                            to="/skills" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Skills
                        </NavLink>
                        <NavLink 
                            to="/skills" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Skills
                        </NavLink>
                    </span>
                </div>
                <div className="single-nav-link" id="contact-link">
                    <span>
                        <NavLink 
                            to="/contact" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Contact
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Contact
                        </NavLink>
                    </span>
                </div>
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <i class="fa-solid fa-bars"></i>
            </div>
        </nav>
    );
}

export default Navbar;
