import { useState } from "react";

import myImage from "./assets/images/myImage.jpg";
import phoneImage from "./assets/icons/phone.png";
import emailImage from "./assets/icons/email.png";
import githubImage from "./assets/icons/github.png";
import linkedinImage from "./assets/icons/linkedin.png";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <main className="main-container">
        <Header />
        <section className="content-container">
          <div className="text-container">
            <h1 className="about-title">Arie Fishman</h1>
            <p className="about-text">
              Highly skilled Front-End Developer with 1+ years of experience in
              creating responsive single page web applications using React,
              JavaScript, TypeScript, Redux, HTML and CSS. Demonstrated ability
              to implement engaging user interfaces and collaborate effectively
              with designers and product managers. Proven track record in
              translating design mockups into fully functional web pages.
              Skilled in leading technical design and developing new features
              from scratch. Adept at refactoring code for improved
              maintainability and optimizing user experience. Seeking a
              front-end development role to leverage my skills in creating
              intuitive and visually appealing web applications.
            </p>
          </div>
          <figure className="image-container">
            <img className="photo" src={myImage} alt="Arie Fishman" />
          </figure>
        </section>
        <footer>
          <h2 className="contact-title">Contact</h2>
          <ul className="contact-section">
            <li className="contact-item">
              <img className="contact-icon" src={phoneImage} alt="phone" />
              <span className="contact-text">0526053278</span>
            </li>

            <li className="contact-item">
              <img className="contact-icon" src={emailImage} alt="email" />
              <span className="contact-text">ariefishman.work@gmail.com</span>
            </li>

            <li className="contact-item">
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="contact-icon" src={githubImage} alt="github" />
                <span className="contact-text">https://github.com/jayzpkz</span>
              </a>
            </li>

            <li className="contact-item">
              <a
                href="https://www.linkedin.com/in/your-linkedin-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="contact-icon"
                  src={linkedinImage}
                  alt="linkedin"
                />
                <span className="contact-text">
                  https://www.linkedin.com/in/arie-fishman
                </span>
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}

export default App;
