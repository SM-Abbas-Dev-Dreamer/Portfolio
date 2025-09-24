import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">Gold <span>tech</span></div>

            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <div className="single-nav-link" id="home-link">
                    <span>
                        <Link 
                            to="/" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Home
                        </Link>
                    </span>
                </div>
                <div className="single-nav-link" id="about-link">
                    <span>
                        <Link 
                            to="/about" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            About
                        </Link>
                        <Link 
                            to="/about" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            About
                        </Link>
                    </span>
                </div>
                <div className="single-nav-link" id="projects-link">
                    <span>
                        <Link 
                            to="/projects" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Projects
                        </Link>
                        <Link 
                            to="/projects" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Projects
                        </Link>
                    </span>
                </div>
                <div className="single-nav-link" id="skills-link">
                    <span>
                        <Link 
                            to="/skills" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Skills
                        </Link>
                        <Link 
                            to="/skills" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Skills
                        </Link>
                    </span>
                </div>
                <div className="single-nav-link" id="contact-link">
                    <span>
                        <Link 
                            to="/contact" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Contact
                        </Link>
                        <Link 
                            to="/contact" 
                            onClick={() => setIsOpen(false)} 
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Contact
                        </Link>
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
