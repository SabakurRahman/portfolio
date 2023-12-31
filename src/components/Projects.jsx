import React from "react";
import arrow from "../assets/arrow.png";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <section id="projects">
      <Helmet>
        <title>Project</title>
      </Helmet>
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project1} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Amazone Clone
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/SabakurRahman/amazon-frontend")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href = "https://amazon.sabakurdev.xyz/")
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project2} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">E-commerce</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/SabakurRahman/e-commerce-laravel-vue")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project3} alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              HR Management{" "}
            </h2>
            <span className="project-span">
              Email: sabakur.shakib@gmail.com
              <br></br> Password: 12345678
            </span>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/SabakurRahman/Human-Resource-Management")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://hrm.sabakurdev.xyz/hr-dashboard")
                }
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
