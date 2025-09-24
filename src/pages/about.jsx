
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
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
// import Swipejs from "../assets/swipejs.png";

const about = () => {
     useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: false,    // whether animation should happen only once - while scrolling down
      });
    }, []);
  return (
    <>
    <div className="glow"></div>
      <div className="margin2"></div>
      <h1 className="About-h1">About Me</h1>
      <div className="about-section">
        <div className="about-first-section " data-aos="fade-right">
          <h2>Who Am I?</h2>
          <p>
            I am a passionate web developer with a love for creating dynamic and
            user-friendly websites. With a background in computer science and
            years of experience in the industry, I have honed my skills in
            various web technologies.
          </p>
          <div className="about-sections-buttons">
           <Link to="/projects" className="btn btn-primary">View Projects</Link>

          </div>
        </div>
        <div className="about-scond-section">
          <h2>My Skills</h2>
          <div className="skill-box"data-aos="fade-up">
            <ul calssName="skill-ul"  >
              <h4>Languges</h4>
              <li>
                <div className="skill-logo">
                  <img src={Html} alt="" />
                </div>
                HTML
              </li>
              <li>
                <div className="skill-logo">
                  <img src={Css} alt="" />
                </div>
                CSS
              </li>
              <li>
                <div className="skill-logo">
                  <img src={Javascript} alt="" />
                </div>
                JavaScript
              </li>
            </ul>

            <ul calssName="skill-ul skill-ul-down">
              <h4>Library</h4>
              <li>
                <div className="skill-logo">
                  <img src={Reactjs} alt="" />
                </div>
                React
              </li>
              <li>
                <div className="skill-logo">
                  <img src={Threejs} alt="" />
                </div>
                Three Js
              </li>
              <li>
                {/* <div className="skill-logo"><img src={Swipejs} alt="" /></div>Swipe JS */}
              </li>
            </ul>

            <ul calssName="skill-ul skill-ul-down">
              <h4>Backend</h4>
              <li>
                <div className="skill-logo">
                  <img src={Nodejs} alt="" />
                </div>
                Node Js
              </li>
              <li>
                <div className="skill-logo">
                  <img src={Expressjs} alt="" />
                </div>
                Express JS
              </li>
            </ul>

            <ul calssName="skill-ul">
              <h4>Database</h4>
              <li>
                <div className="skill-logo">
                  <img src={Mongodb} alt="" />
                </div>
                MongoDB
              </li>
              <li>
                <div className="skill-logo">
                  <img src={Mysql} alt="" />
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

export default about;
