import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import contactImg from "../../Assets/Contact/contact-bg.jpeg";
import sideImage from "../../Assets/Contact/contact-img.png"; // Import your side image

const Contact = () => {
  let [firstname, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      firstname,
      lastname,
      email,
      phone,
      message,
    };
    try {
      let result = await axios({
        url: "https://671b767c2c842d92c38011af.mockapi.io/contact",
        method: "post",
        data,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-section">
      <img
        src={contactImg}
        alt="Contact Background"
        className="contact-background"
      />
      <Container>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "175px",
            paddingBottom: "33px",
          }}
        >
          <Col md={5}>
            <img
              src={sideImage} 
              alt="Side"
              className="img-fluid"
            />
          </Col>
          <Col md={7}>
            <h1
              className="contact-heading"
              style={{
                marginBottom: "2px",
                color: "white",
                textAlign: "center",
              }}
            >
              Get in <strong className="yellow">Touch</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Feel free to reach out if you have any questions, project ideas,
              or just want to connect!
            </p>

            <form
              onSubmit={handleSubmit}
              style={{
                marginTop: "43px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Row style={{ width: "100%" }}>
                <Col md={6} className="px-1">
                  <input
                    type="text"
                    value={firstname}
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="form-control"
                  />
                </Col>

                <Col md={6} className="px-1">
                  <input
                    type="text"
                    value={lastname}
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="form-control"
                  />
                </Col>

                <Col md={6} className="px-1" style={{ marginTop: "15px" }}>
                  <input
                    type="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control"
                  />
                </Col>

                <Col md={6} className="px-1" style={{ marginTop: "15px" }}>
                  <input
                    type="tel"
                    value={phone}
                    placeholder="Phone No."
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="form-control"
                  />
                </Col>

                <Col md={12} className="px-1" style={{ marginTop: "15px" }}>
                  <textarea
                    rows="6"
                    value={message}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="form-control"
                  />
                </Col>

                <Col
                  md={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="submit-btn"
                    style={{ marginTop: "20px" }}
                  >
                    Submit
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
