import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdul Quddos </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br /> I am a final year student pursuing the degree of Bachelors
            in Software Engineering from Bahria University, Karachi.
            <br />
            Additionally, I am currently employed as a Team Manager at
            Squad International Pvt. Limited.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Indoor and Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Research
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdul Quddos</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
