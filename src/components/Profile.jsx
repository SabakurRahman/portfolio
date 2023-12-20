import React from "react";
import { useNavigate } from "react-router-dom";
import shakibProfilePicture from "../assets/shakib.jpg";
import linkdin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Profile = () => {
  const navigate = useNavigate();
  const handleDownloadCV = () => {
    // Handle the logic for downloading the CV
    window.open("./assets/resume-example.pdf");
  };

  const handleContactInfo = () => {
    navigate("/contact");
  };

  const handleLinkedIn = () => {
    // Handle the logic for navigating to the LinkedIn profile
    window.location.href = "https://linkedin.com/";
  };

  const handleGithub = () => {
    // Handle the logic for navigating to the GitHub profile
    window.location.href = "https://github.com/";
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          id="round-pic"
          src={shakibProfilePicture}
          alt="shakib profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sabakur Rahman</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleContactInfo}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkdin}
            alt="My LinkedIn profile"
            className="icon"
            onClick={handleLinkedIn}
          />
          <img
            src={github}
            alt="My Github profile"
            className="icon"
            onClick={handleGithub}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
