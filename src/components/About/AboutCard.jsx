import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="yellow">Sandesh Raj Dangol </span>
            from <span className="yellow"> Lalitpur, Nepal.</span>
            <br />I am currently pursuing my studies at
            <span className="yellow"> Sunway College, Kathmandu.</span>
            <br />I completed my higher secondary education at
            <span className="yellow"> Prasadi Academy </span>
            and my schooling at
            <span className="yellow"> GEMS School.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Doodling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cardistry
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Contents
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Artistic Concepts
            </li>
            <li className="about-activity">
              <ImPointRight /> Binge Watching Anime
            </li>
          </ul>

          <p style={{ color: "#FFE484" }}>
            "Be who you want to be, Not what someone wants you to be"{" "}
          </p>
          <footer className="blockquote-footer">Sandesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
