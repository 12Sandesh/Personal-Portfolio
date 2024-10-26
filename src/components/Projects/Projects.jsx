import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import anime from "../../Assets/Projects/anime.jpg";
import hms from "../../Assets/Projects/hms.jpeg";
import signlang from "../../Assets/Projects/signlang.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are projects I've worked on.</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anime}
              isBlog={false}
              title="ANIME 霊"
              description="Using HTML and CSS only, this website provides an overview of anime, highlighting its definition and distinguishing features compared to other forms of animation and manga. It includes an anime gallery, profiles of notable animators and mangakas in the industry, and a contact page. Additionally, it also offers links to popular platforms for watching and listing anime."
              ghLink="https://github.com/12Sandesh/Website-Design-and-Development"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="Hospital Management System"
              description="This Python project creates a rudimentary hospital management system. An administrator can manage doctors (register, view, update, delete) and patients (view, discharge), assign doctors based on symptoms, and update their own account details. While simplified, it showcases core functionalities for a hospital management system, handling key aspects of personnel and patient administration."
              ghLink="https://github.com/12Sandesh/Hospital-Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signlang}
              isBlog={false}
              title="Sign Language Recognition"
              description="This code demonstrates a sign language recognition system. It captures images of hand gestures from a webcam, crops them, and resizes them for training a custom Keras model called 'Teras'. The trained model then recognizes sign language in real-time by analyzing hand gestures captured from the webcam. The system translates these gestures into text or spoken language, enabling communication through sign language."
              ghLink="https://github.com/12Sandesh/Sign-Language-Recognition"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
