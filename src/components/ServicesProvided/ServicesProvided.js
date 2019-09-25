import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

class ServicesProvided extends Component {
  render() {
    return (
      <div className="services-provided">
        <section className="header">
          <h1 className="title">
            Our goal is the same today as it was the first day we opened...
          </h1>
          <h2 className="subtitle">
            Provide our customers with the best Customer Experience.
          </h2>
        </section>
        <hr className="page-break" />
        <section className="top-service">
          <Fade bottom duration={1500}>
            <div className="audio-service">
              <NavLink to="/audio">
                <img
                  src="https://i.imgur.com/cmpdsr2.jpg"
                  alt="Speakers"
                  className="top-service-img"
                />
                <h3>HOME AUDIO</h3>
              </NavLink>
              <p>
                A great audio system begins with a thoughtful and comprehensive
                design phase. Our design team will carefully identify each of
                your requirements, explore all options with you, and make the
                appropriate recommendations. Our team is also available to
                coordinate our work with your builder, general contractors,
                interior designer, or landscape architect.
              </p>
            </div>
          </Fade>
        </section>
        <section className="services-info">
          <Fade left duration={1500}>
            <div className="automation service">
              <NavLink to="/automation">
                <img
                  src={require("../../assets/images/homeAutomation.jpg")}
                  alt="Speakers"
                  className="service-img"
                />
                <h3>HOME AUTOMATION</h3>
              </NavLink>
              <p>
                From projects small to large, new and old, we create systems
                with the power and performance to transform your lifestyle into
                complete and brilliant experiences that fit your needs and are
                easy for your family to enjoy. With one touch dim the lights,
                stream high-resolution music, turn up the heat, lock the doors
                and arm the security system. Or, check in on your home no matter
                where you are. It’s a smarter living experience that you’ll
                wonder how you ever lived without.
              </p>
            </div>
          </Fade>
          <Fade right duration={1500}>
            <div className="video service">
              <NavLink to="/video">
                <img
                  src="https://i.imgur.com/ljubwIP.jpg"
                  alt="Speakers"
                  className="service-img"
                />
                <h3>HOME CINEMA</h3>
              </NavLink>
              <p>
                Sound Insight can plan, design, and install a custom and
                dedicated home-cinema solution tailored to your needs. From the
                initial conceptual stage to acoustical engineering, noise and
                vibration abatement, audio and video component selection,
                projector selection and configuration, screen selection, theater
                lighting consideration, and specialized seating and interior
                design, our experienced team is there to walk you through the
                process.
              </p>
            </div>
          </Fade>
          <Fade left duration={1500}>
            <div className="phone service">
              <NavLink to="/phone-systems">
                <img
                  src={require("../../assets/images/phone-system.png")}
                  alt="Man making phonecall"
                  className="service-img"
                />
                <h3>PHONE SYSTEMS</h3>
              </NavLink>
              <p>
                Sound Insight offers a one-stop solution for your business and
                residential communication needs. Our knowledgeable and friendly
                staff has the experience and expertise to work with you to
                design, install, and maintain a phone system that will best meet
                your needs, from basic digital systems to modern VoIP systems.
                We offer sales, installation and maintenance of both large and
                small phone systems with the same friendly and expert care.
              </p>
            </div>
          </Fade>
          <Fade right duration={1500}>
            <div className="security service">
              <NavLink to="/security">
                <img
                  src={require("../../assets/images/securitysystems.jpg")}
                  alt="Speakers"
                  className="service-img"
                />
                <h3>SECURITY</h3>
              </NavLink>
              <p>
                Sound Insight offers turnkey solutions for video surveillance
                and security system installation. We can offer you peace of mind
                that your business or residence is protected 24 hours a day.
                Security Camera and Video Surveillance Systems, also referred to
                as CCTV systems, DVR security, or IP cameras can be a great tool
                to protect your company or commercial properties from theft,
                damaging lawsuits, employee misconduct, and vandalism.
              </p>
            </div>
          </Fade>
        </section>
      </div>
    );
  }
}

export default ServicesProvided;
