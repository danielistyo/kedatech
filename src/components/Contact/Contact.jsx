import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <Container key="contact" data-aos="fade-up" data-aos-duration="500">
        <Row>
          <Col>
            <div className="contact-detail">
              <h1 className="title">Contact Us</h1>
              <p className="description">
                Write down your message in this form below. We will call you as soon as possible.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                </Col>
                <Col md={6} className="phone-input">
                  <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Phone" />
                  </Form.Group>
                </Col>
              </Row>
              <Col className="message-input">
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
