import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Style/skills.css";

import Mongodb from "../assets/mongodb.png";
import Mysql from "../assets/mysql.png";
import Nodejs from "../assets/nodejs.png";
import Expressjs from "../assets/expressjs.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Reactjs from "../assets/reactjs.png";
import Threejs from "../assets/threejs.png";

const circleSkills = [
  { name: "Node.js", percentage: 70, img: Nodejs },
  { name: "React", percentage: 75, img: Reactjs },
  { name: "Express", percentage: 65, img: Expressjs },
  { name: "MongoDB", percentage: 75, img: Mongodb },
];

const barSkills = [
  { name: "HTML", percentage: 90, img: Html },
  { name: "CSS", percentage: 85, img: Css },
  { name: "JavaScript", percentage: 80, img: Javascript },
];

function Skills() {
  const [circleProgress, setCircleProgress] = useState(
    circleSkills.map(() => 0)
  );
  const [barProgress, setBarProgress] = useState(barSkills.map(() => 0));

  useEffect(() => {
    // Circle progress animation
    circleSkills.forEach((skill, index) => {
      let value = 0;
      const interval = setInterval(() => {
        value++;
        setCircleProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = value;
          return newProgress;
        });
        if (value >= skill.percentage) clearInterval(interval);
      }, 20);
    });

    // Bar progress animation
    barSkills.forEach((skill, index) => {
      let value = 0;
      const interval = setInterval(() => {
        value++;
        setBarProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = value;
          return newProgress;
        });
        if (value >= skill.percentage) clearInterval(interval);
      }, 20);
    });
  }, []);
   useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: false,    // whether animation should happen only once - while scrolling down
      });
    }, []);

  return (
    <div className="skills-page">
      <h1 data-aos="fade-up">My Skills</h1>
      <p data-aos="fade-up">Here are these my Few skills</p>

      <div className="skills-section">
        {/* Bar Skills */}
        <div className="bar-skills" data-aos="fade-up">
          {barSkills.map((skill, i) => (
            <div className="bar-skill" key={i}>
              <div className="bar-skill-header">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="bar-skill-img"
                />
                <span>{skill.name}</span>
                <span>{barProgress[i]}%</span>
              </div>
              <div className="bar">
                <div
                  className="bar-fill"
                  style={{ width: `${barProgress[i]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Circle Skills */}
        <div className="skills-container">
          {circleSkills.map((skill, i) => (
            <div className="skill" key={i}>
              <div
                className="circle"data-aos="fade-up"
                style={{
                  background: `conic-gradient(#00c9ff ${
                    circleProgress[i] * 3.6
                  }deg, #444 ${circleProgress[i] * 3.6}deg)`,
                }}
              >
                {/* inner mask for border thickness */}
                <div className="circle-inner">
                  <img src={skill.img} alt={skill.name} className="skill-img" />
                </div>
              </div>
              <div className="skill-progress">{circleProgress[i]}%</div>
            </div>
          ))}
        </div>
      </div>
      <div className="education">
        <h1  data-aos="fade-up" >Education</h1>
        <div className="education-section" data-aos="fade-up">
          <div className="digree-circle"><i className="fa-solid fa-user-graduate"></i></div>
          <div className="inner-box">
            <h3>Bachelor of Science in Computer Science</h3>
            <h4>Government Islamia College, Civil Lines, Lahore</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              quibusdam, tenetur aliquam hic in vero?
            </p>
          </div>
        </div>
        <div className="education-section second"data-aos="fade-up">
          <div className="inner-box">
          <div className="digree-circle second"><i className="fa-solid fa-user-graduate"></i></div>
            <h3>Intermediate in Computer Science (ICS)</h3>
            <h4>PUNJAB GROUPS OF COLLEGES Shahdra campus</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              dolorem quos corporis, explicabo velit praesentium!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
