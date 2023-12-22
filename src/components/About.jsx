import React from "react";
import aboutPic from "../assets/about-pic.png";
import exparienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";

const About = () => {
  const textContainerStyle = {
    textAlign: "justify",
  };
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            id="about-pic-223"
            src={aboutPic}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={exparienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                1.5+ years <br />
                Full Stack Development
              </p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>B.Sc. (Engg.) in Computer Science & Engineering</p>
            </div>
          </div>
          <div className="text-container">
            <p style={textContainerStyle}>
              Hey there, I'm Sbakur Rahman Shakib, a results-driven full-stack
              software developer with expertise in Laravel and React. A proud
              graduate of North South University's Computer Science and
              Engineering program, I thrive on creating seamless digital
              experiences. My skills range from crafting clean, efficient code
              to developing user-centric applications. Eager to explore new
              opportunities and collaborations, I'm excited about the
              intersection of technology and innovation. Let's connect and
              discuss how I can bring your next project to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
