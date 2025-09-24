import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Style/home.css";
import my_img from "../assets/4.png";
import CV from "../assets/CV.pdf";

const home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <div className="margin"></div>

      <div className="home-section">
        <div className="content-section " data-aos="fade-right">
          <h4>Introduction</h4>
          <h1>Hi I`m a Full Stack Developer based in Pakistan</h1>
          <p>
            I am a passionate and detail-oriented Freelance Web Developer with
            expertise in modern web technologies. I specialize in creating
            dynamic, responsive, and user-friendly web applications using React,
            Node.js, Firebase, and Vite. With a strong foundation in both
            frontend and backend development, I build scalable and efficient
            solutions tailored to client needs. My focus is on delivering
            high-quality work, optimizing performance, and ensuring a seamless
            user experience
          </p>
          <div className="buttons-area">
            <a href="https://www.linkedin.com/in/sm-abbas-48a8982a9/" className="btn hire-me">Hire Me</a>
            <a href={CV} download className="btn download-cv">
              Download CV{" "}
              <span>
                <i className="fa-solid fa-download"></i>
              </span>
            </a>
          </div>
          <div className="social-media-navigation " data-aos="zoom-out">
            <div className="glow-2"></div>
            <p>Also touch on social media</p>
            <div className="social-media-links">
              <a href="https://www.facebook.com/profile.php?id=100088920522460">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/m.abbas_niqvi/">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://x.com/SM_Abbas23">
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="syedmuhammadabbasniqvi@gmail.com">
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-google"></i>
              </a>
              <a href="https://www.linkedin.com/in/sm-abbas-48a8982a9/">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="image-section " data-aos="zoom-in">
          {/* <div className="hero-pop-up pop-up-1">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, adipisci.
            </p>
          </div>
          <div className="hero-pop-up pop-up-2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, adipisci.
            </p>
          </div> */}
          <div className="name-on-image">
            <h1>SYED MUHAMMAD ABBAS</h1>
          </div>
          <img src={my_img} alt="" />
        </div>
      </div>
    </>
  );
};

export default home;
