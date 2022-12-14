import React, { useState } from "react";
import image1 from "./photos/7-8-22.jpg";
import image2 from "./photos/IMG_0259.jpg";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import { relative } from 'path';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//small change

const About = () => {
  // const {key, setKey} = useState('home');
  return (
    <div className="container dev-profile">
      <form method="">
        <div className="row">
          <div className="col-lg-3">
            <img
              src={image1}
              className="rounded float-start img-fluid"
              alt="Jason Hunter"
            />
            <div className="about-work">
              <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                <a href="https://www.linkedin.com/in/jasonethunter/" target="">
                  {" "}
                  LinkedIn
                </a>
                <br />
                <a href="https://github.com/jayhun0521" target="">
                  {" "}
                  Github
                </a>
                <br />
              </span>
            </div>
          </div>
          <div className="col-lg-9">
            <h1>Jason Hunter</h1>
            <h2>Web Developer, Back-end Specialist</h2>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="aboutme" title="About Me">
                <p>
                  I'm Jason, a US Army veteran and recent MBA graduate with 7+
                  years of professional experience in HR recruitment and IT
                  Staffing. I've obtained Web Development certifications at
                  Kable Academy; graduated in December 2022 and currently seeking a
                  front-end developer position with a dynamic and well-regarded
                  organization. My personal achievements include military service
                  in the US Army and recognition on multiple levels on tour
                  during Operation Iraqi Freedom and Operation Enduring Freedom. But, above it all I'm proud of my 7 year old son (Isaiah), 5 year old daughter (Zoe), and Fiance (Jamie).{" "}
                </p>
              </Tab>
              <Tab eventKey="technologies" title="Technologies">
                <ul>
                  <li style={{color:'blue'}}>HTML5</li>
                  <li style={{color:'blue'}}>CSS3</li>
                  <li style={{color:'blue'}}>JavaScript</li>
                  <li style={{color:'blue'}}>React.js</li>
                  <li style={{color:'blue'}}>Bootstrap 5</li>
                  <li style={{color:'blue'}}>Node.js</li>
                  <li style={{color:'blue'}}>MongoDB/NoSQL</li>
                </ul>
              </Tab>
            </Tabs>
          </div>
        </div>
        <hr />
      </form>

      <div className="row">
        <div className="col-lg-3">
          <span style={{ height: "200px" }}>
            <img
              src={image2}
              className="rounded float-start img-fluid"
              alt="Darius Martin"
            />
          </span>
          <div className="about-work">
            <span style={{ fontSize: "15px", fontWeight: "bold" }}>
              <a
                href="http://www.linkedin.com/in/darius-martin-924b52215"
                target=""
              >
                {" "}
                LinkedIn
              </a>
              <br />
              <a href="https://github.com/Martyahmood32" target="">
                {" "}
                Github
              </a>
              <br />
            </span>
          </div>
        </div>
        <div className="col-lg-9">
          <h1>Darius Martin</h1>
          <h2>Web Developer, Front-end Specialist</h2>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="about" title="About">
              <p>
                Hey I???m Darius I am 18 and was born and raised here in
                Cincinnati, Ohio. I am currently a student a Kable Academy where
                I am learning Web Development and business skills. Before Kable
                academy I was working at Larosas call center(which is a company
                built here in Cincinnati) for 2 years where I was a supervisor
                and was working with a team of other supervisors fixing order
                problems and helping stores with their issues. I plan on using
                my team working skills and computer knowledge to open more
                opportunities for myself and to better the company of my future
                job to the best of my ability.{" "}
              </p>{" "}
            </Tab>
            <Tab eventKey="technologies" title="Technologies">
              <ul>
                <li style={{color:'blue'}}>HTML5</li>
                <li style={{color:'blue'}}>CSS3</li>
                <li style={{color:'blue'}}>JavaScript</li>
                <li style={{color:'blue'}}>React.js</li>
                <li style={{color:'blue'}}>Bootstrap 5</li>
                <li style={{color:'blue'}}>Node.js</li>
                <li style={{color:'blue'}}>MongoDB/NoSQL</li>
              </ul>{" "}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default About;

