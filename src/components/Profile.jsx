import React from "react";
import { useNavigate } from "react-router-dom";
import shakibProfilePicture from "../assets/shakib.jpg";
import linkdin from "../assets/linkedin.png";
import github from "../assets/github.png";
import cvpdf from "../assets/sabakur-rahman-shakib.pdf";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const navigate = useNavigate();
  const handleDownloadCV = () => {
    const fileUrl = cvpdf;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume-example.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const handleContactInfo = () => {
    navigate("/contact");
  };

  const handleLinkedIn = () => {
    // Handle the logic for navigating to the LinkedIn profile
    window.location.href = "https://www.linkedin.com/in/sabakur/";
  };

  const handleGithub = () => {
    // Handle the logic for navigating to the GitHub profile
    window.location.href = "https://github.com/SabakurRahman";
  };

  return (
    <section id="profile">
      <Helmet>
        <title>Home</title>
      </Helmet>
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
        <p className="section__text__p2">
          Full Stack Developer
          <span>
            <h5>(Laravel And React)</h5>
          </span>
        </p>
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
