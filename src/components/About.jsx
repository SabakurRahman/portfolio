import React from "react";
import aboutPic from "../assets/about-pic.png";
import exparienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
import arrowIcon from "../assets/arrow.png";

const About = () => {
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
                Backend Development
              </p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>B.Sc. (Engg.) in Computer Science & Engineering</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "/experience")}
      />
    </section>
  );
};

export default About;