import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Drvoice from "./voicedr.jpg";
import crypto from "./cryptoimage.jpg";
import crop from "./cropdisease.jpg";
import java from "./java.jpg"
import ecm from "./ecommerce.jpg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="CRYPredict"
              description="The objective of CRYPredict is to develop an application which will predict the crypto Prices in future with decent accuracy. This allows the investors to invest wisely in crypto trading as the prices of crypto have gone up to an exaggerating amount in the last ten years  "
              ghLink="https://github.com/ssk-13/CRYPredict"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
              isBlog={false}
              title="Employee Management System"
              description="This is Java Web app project made with JSP, JSTL, Servlet, MySQL. In this project, user can add, update, delete, view employee age, name, salary, etc "
              ghLink="https://github.com/hp0204/employee-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crop}
              isBlog={false}
              title="Crop Disease Prediction"
              description="In this project, prediction of crop diseased plant is done using deep learning techniques.Transfer learning technique is used for classification of diseased plant."
              ghLink="https://github.com/hp0204/crop-disease-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecm}
              isBlog={false}
              title="Ecommerce Website "
              description="The implemented website has features like search for products; add to cart, buy product, view by category, about product, discount, payment
              options etc.  "
              ghLink="https://github.com/hp0204/Shopkart_Frontend"
              // demoLink="https://shoppkartt.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drvoice}
              isBlog={false}
              title="Voice Prescription System"
              description="Desktop Application created for Doctor so they can diagnose the patient  and send Prescription to Patient through Mail"
              ghLink="https://github.com/hp0204/VoicePrescription_System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
