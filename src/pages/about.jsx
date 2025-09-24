import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Style/about.css";

import Mongodb from "../assets/mongodb.png";
import Mysql from "../assets/mysql.png";
import Nodejs from "../assets/nodejs.png";
import Expressjs from "../assets/expressjs.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Reactjs from "../assets/reactjs.png";
import Threejs from "../assets/threejs.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="glow"></div>
      <div className="margin2"></div>
      <h1 className="About-h1">About Me</h1>
      <div className="about-section">
        <div className="about-first-section" data-aos="fade-right">
          <h2>Who Am I?</h2>
          <p>
            I am a passionate web developer with a love for creating dynamic and
            user-friendly websites. With a background in computer science and
            years of experience in the industry, I have honed my skills in
            various web technologies.
          </p>
          <div className="about-sections-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
          </div>
        </div>

        <div className="about-scond-section">
          <h2>My Skills</h2>
          <div className="skill-box" data-aos="fade-up">
            
            <h4>Languages</h4>
            <ul className="skill-ul">
              <li>
                <div className="skill-logo">
                  <img src={Html} alt="HTML" />
                </div>
                HTML
              </li>
              <li>
                <div className="skill-logo">
                  <img src={Css} alt="CSS" />
                </div>
                CSS
              </li>
              <li>
                <div className="skill-logo">
                  <img src={Javascript} alt="JavaScript" />
                </div>
                JavaScript
              </li>
            </ul>

            <h4>Library</h4>
            <ul className="skill-ul skill-ul-down">
              <li>
                <div className="skill-logo">
                  <img src={Reactjs} alt="React" />
                </div>
                React
              </li>
              <li>
                <div className="skill-logo">
                  <img src={Threejs} alt="Three.js" />
                </div>
                Three Js
              </li>
            </ul>

            <h4>Backend</h4>
            <ul className="skill-ul skill-ul-down">
              <li>
                <div className="skill-logo">
                  <img src={Nodejs} alt="Node.js" />
                </div>
                Node Js
              </li>
              <li>
                <div className="skill-logo">
                  <img src={Expressjs} alt="Express" />
                </div>
                Express JS
              </li>
            </ul>

            <h4>Database</h4>
            <ul className="skill-ul">
              <li>
                <div className="skill-logo">
                  <img src={Mongodb} alt="MongoDB" />
                </div>
                MongoDB
              </li>
              <li>
                <div className="skill-logo">
                  <img src={Mysql} alt="MySQL" />
                </div>
                My SQL
              </li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
