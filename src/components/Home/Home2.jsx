import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/formalpic.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body" style={{ textAlign: "justify" }}>
              My journey into creative and digital fields began with a deep
              passion for
              <b className="yellow">
                {" "}
                visual storytelling and interactive media.{" "}
              </b>
              <br />
              <br />
              What began as
              <b className="yellow"> doodles and photo editing experiments </b>
              soon evolved into creating professional designs that communicate
              <b className="yellow"> powerful messages. </b>
              <br />
              <br />
              As I honed my graphic design skills, I developed a passion for
              <b className="yellow"> photography, </b>
              capturing moments that complemented my design work and expanded my
              understanding of <b className="yellow"> visual aesthetics. </b>
              <br />
              <br />
              This led me to
              <b className="yellow"> video editing, </b>
              where I combined motion, sound, and visuals to tell stories. Video
              projects taught me the importance of
              <b className="yellow">
                {" "}
                timing, narrative flow, and blending different media to create
                compelling content.{" "}
              </b>
              <br />
              <br />
              Gaming, especially first-person shooters (FPS), has always been a
              major part of my life and naturally led me to
              <b className="yellow"> game development. </b>I wanted to create
              <b className="yellow"> immersive worlds </b>
              that combined
              <b className="yellow"> design, storytelling, and interaction, </b>
              applying my skills in coding and creativity.
              <br />
              <br />
              As I developed games, I also ventured into
              <b className="yellow"> web development </b>
              to showcase my projects. This grew into a passion for creating
              <b className="yellow">
                {" "}
                intuitive, user-friendly websites, blending coding and design
                into a fulfilling creative pursuit.
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please feel free to <span className="yellow">contact </span>me on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  // href="https://github.com/soumyajit4419"
                  href="https://github.com/12Sandesh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href="https://twitter.com/Soumyajit4419"
                  href="https://x.com/sand_sl3pyh3ad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <RiTwitterXFill />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href="https://www.linkedin.com/in/soumyajit4419/"
                  href="https://www.linkedin.com/in/sandeshrajdangol/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href="https://www.instagram.com/soumyajit4419"
                  href="https://www.instagram.com/srd_me_myself_i/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home2;
