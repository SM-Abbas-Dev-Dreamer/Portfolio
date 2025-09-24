
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Style/projects.css";
 import Ecommerence from "../assets/ecommerence.png";
 import Portfolio from "../assets/portfolio.png";
 import ChatApp from "../assets/chatapp.jpg";
 import BlogPlatform from "../assets/blogplatform.jpg";
 import WeatherApp from "../assets/weatherapp.jpg";
 import TaskManager from "../assets/taskmanager.webp";
 import MovieFinder from "../assets/moviefinder.jpg";
 import LandingPage from "../assets/landingpage.jpg";
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A full-stack e-commerce app built with React, Firebase, and Stripe.",
    image: Ecommerence,
    tech: ["React", "Firebase", "CSS"],
    live: "#",
    code: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio website to showcase my projects and skills.",
    image: Portfolio,
    tech: ["React", "Vite", "CSS"],
    live: "#",
    code: "#",
  },
  {
    id: 3,
    title: "Chat App",
    description: "Real-time chat app using Firebase Authentication and Firestore.",
    image: ChatApp,
    tech: ["React", "Firebase", "Node.js"],
    live: "#",
    code: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A blogging platform with user authentication and CRUD features.",
    image: BlogPlatform,
    tech: ["Node.js", "Express", "MongoDB"],
    live: "#",
    code: "#",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Weather forecast app using OpenWeather API.",
    image: WeatherApp,
    tech: ["React", "API", "CSS"],
    live: "#",
    code: "#",
  },
  {
    id: 6,
    title: "Task Manager",
    description: "A to-do list/task manager with local storage support.",
    image: TaskManager,
    tech: ["React", "LocalStorage", "CSS"],
    live: "#",
    code: "#",
  },
  {
    id: 7,
    title: "Movie Finder",
    description: "Search movies using OMDB API with rating filters.",
    image: MovieFinder,
    tech: ["React", "API", "CSS"],
    live: "#",
    code: "#",
  },
  {
    id: 8,
    title: "Landing Page",
    description: "Responsive landing page design with animations.",
    image: LandingPage,
    tech: ["HTML", "CSS", "JS"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
     useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: false,    // whether animation should happen only once - while scrolling down
      });
    }, []);
  return (
    <section className="projects">
      <div className="container">
        <h2 className="heading" data-aos="flip-left" >My Projects</h2>
        <p className="subtext"data-aos="flip-right" >
          Here are some of the projects I’ve built recently.
        </p>

        <div className="grid" >
          {projects.map((project) => (
            <div key={project.id} className="card"data-aos="fade-up">
              <img src={project.image} alt={project.title} className="card-img" />

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                <div className="tags">
                  {project.tech.map((t, index) => (
                    <span key={index} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="buttons">
                  <a href={project.live} className="btn live" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.code} className="btn code" target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
