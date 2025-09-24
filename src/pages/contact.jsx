import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Video_Bg from "../assets/video-bg.mp4";
import "./Style/contact.css";

const Contact = () => {
     useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: false,    // whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <div className="contact-header">
      {/* <video 
          src={Video_Bg} 
          className="video-background" 
          muted 
          autoPlay 
          loop
        /> */}
      <h2 data-aos="fade-up">
        Hello, <br /> Let`s Work Together on your next Project
      </h2>
      <div className="contact-conent">
        <div className="description">
          <h3 data-aos="fade-up">Get In Touch</h3>
          <h4 data-aos="fade-up">I`d like to hear from you</h4>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            corporis voluptate assumenda sapiente. Quae culpa officia officiis
            ad aspernatur minus!
          </p>
          <div className="social-media-navigation" data-aos="fade-up">
            <div className="glow-2"></div>
            <div className="social-media-links">
              <a href="https://www.facebook.com/profile.php?id=100088920522460">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/m.abbas_niqvi/">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://x.com/SM_Abbas23">
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-google"></i>
                <i class="fa-brands fa-google"></i>
              </a>
              <a href="https://www.linkedin.com/in/sm-abbas-48a8982a9/">
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form action="#">
            <div className="name-point">
              <div className="form-control">
                <input type="text" required placeholder="" data-aos="fade-up" />
                <label  data-aos="fade-up" >
                  <span style={{ transitionDelay: "0ms" }}>F</span>
                  <span style={{ transitionDelay: "50ms" }}>i</span>
                  <span style={{ transitionDelay: "100ms" }}>r</span>
                  <span style={{ transitionDelay: "150ms" }}>s</span>
                  <span style={{ transitionDelay: "200ms" }}>t</span>
                  <span style={{ transitionDelay: "250ms" }}></span>
                  <span style={{ transitionDelay: "300ms" }}>N</span>
                  <span style={{ transitionDelay: "350ms" }}>a</span>
                  <span style={{ transitionDelay: "350ms" }}>m</span>
                  <span style={{ transitionDelay: "350ms" }}>e</span>
                </label>
              </div>
              <div className="form-control">
                <input type="text" required placeholder=""data-aos="fade-up" />
                <label  data-aos="fade-up">
                  <span style={{ transitionDelay: "0ms" }}>L</span>
                  <span style={{ transitionDelay: "0ms" }}>a</span>
                  <span style={{ transitionDelay: "0ms" }}>s</span>
                  <span style={{ transitionDelay: "0ms" }}>t</span>
                  <span style={{ transitionDelay: "0ms" }}></span>
                  <span style={{ transitionDelay: "0ms" }}>N</span>
                  <span style={{ transitionDelay: "0ms" }}>a</span>
                  <span style={{ transitionDelay: "0ms" }}>m</span>
                  <span style={{ transitionDelay: "0ms" }}>e</span>
                </label>
              </div>
            </div>
            <div className="email-point">
              <div className="form-control">
                <input type="text" required placeholder=""data-aos="fade-up" />
                <label  data-aos="fade-up">
                  <span style={{ transitionDelay: "0ms" }}>E</span>
                  <span style={{ transitionDelay: "0ms" }}>m</span>
                  <span style={{ transitionDelay: "0ms" }}>a</span>
                  <span style={{ transitionDelay: "0ms" }}>i</span>
                  <span style={{ transitionDelay: "0ms" }}>l</span>
                </label>
              </div>
            </div>
            <div className="message">
              <div className="form-control">
                <textarea required rows="4"data-aos="fade-up" />
                <label  data-aos="fade-up">
                  <span style={{ transitionDelay: "0ms" }}>M</span>
                  <span style={{ transitionDelay: "50ms" }}>e</span>
                  <span style={{ transitionDelay: "100ms" }}>s</span>
                  <span style={{ transitionDelay: "150ms" }}>s</span>
                  <span style={{ transitionDelay: "200ms" }}>a</span>
                  <span style={{ transitionDelay: "250ms" }}>g</span>
                  <span style={{ transitionDelay: "300ms" }}>e</span>
                </label>
              </div>
            </div>
            <input type="submit" className="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
