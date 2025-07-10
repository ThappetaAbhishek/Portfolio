import React, { useState } from "react";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">


        <div className="services__content">
  <div>
    <i className="uil uil-mobile-android services__icon"></i>
    <h3 className="services__title">
      App <br /> Developer
    </h3>
  </div>
  <span
    className="services__button"
    onClick={() => {
      toggleTab(2);
    }}
  >
    View More
    <i className="uil uil-arrow-right services__button-icon"></i>
  </span>

  <div
    className={
      toggleState === 2
        ? "services__modal active-modal"
        : "services__modal"
    }
  >
    <div className="services__modal-content">
      <i
        onClick={() => toggleTab(0)}
        className="uil uil-times services__modal-close"
      ></i>

      <h3 className="services__modal-title">App Developer</h3>
      <p className="services__modal-description">
        Building performant mobile apps using Flutter with a focus on clean UI,
        smooth UX, and scalable architecture. I adapt quickly, constantly learn,
        and integrate best practices in every app I develop.
      </p>

      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Cross-Platform App Development (Flutter)</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Beautiful UI & Responsive UX Design</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Firebase Authentication & Realtime DB</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">REST API Integration with Backend</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">App Optimization & Maintenance</p>
        </li>
      </ul>
    </div>
  </div>
</div>


<div className="services__content">
  <div>
    <i className="uil uil-browser services__icon"></i>
    <h3 className="services__title">
      Web Front-End <br /> Developer
    </h3>
  </div>
  <span
    className="services__button"
    onClick={() => {
      toggleTab(3);
    }}
  >
    View More
    <i className="uil uil-arrow-right services__button-icon"></i>
  </span>

  <div
    className={
      toggleState === 3
        ? "services__modal active-modal"
        : "services__modal"
    }
  >
    <div className="services__modal-content">
      <i
        onClick={() => toggleTab(0)}
        className="uil uil-times services__modal-close"
      ></i>

      <h3 className="services__modal-title">Web Front-End Developer</h3>
      <p className="services__modal-description">
        Creating responsive, interactive, and visually appealing websites using
        modern front-end technologies. Focused on clean code, performance, and
        great user experience.
      </p>

      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Responsive UI Development with HTML, CSS, JS</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">React.js Single Page Applications</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Integration with REST APIs & JSON data</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Animations & UI Enhancements with CSS/JS</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">SEO Optimization & Performance Tuning</p>
        </li>
      </ul>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Services;