import React from "react";
import checkmark from "../assets/checkmark.png";
import { Helmet } from "react-helmet-async";

const Experience = () => {
  return (
    <section id="experience">
      <Helmet>
        <title>Experience</title>
      </Helmet>
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>PHP</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Laravel</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Java</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Spring Boot</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>MySql</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>RESTful API</h3>
                  <p>Experienced</p>
                </div>
              </article>

              {/* Repeat similar structure for other skills */}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Mid Lavel</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>React JS</h3>
                  <p>Mid Lavel</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Mid Lavel</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Tailwind</h3>
                  <p>Mid Lavel</p>
                </div>
              </article>

              {/* Repeat similar structure for other skills */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
