import React from "react";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <section id="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:sabakur12360@gmail.com">sabakur12360@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/sabakur/">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
