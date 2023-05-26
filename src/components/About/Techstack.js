import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h6><strong style={{color: "violet"}}>C++</strong></h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h6><strong style={{color: "violet"}}>Java</strong></h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6><strong style={{color: "violet"}}>Javascript</strong></h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6><strong style={{color: "violet"}}>Node Js</strong></h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6><strong style={{color: "violet"}}>React Js</strong></h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6><strong style={{color: "violet"}}>MongoDB</strong></h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6><strong style={{color: "violet"}}>Git</strong></h6>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6><strong style={{color: "violet"}}>Python</strong></h6>
      </Col>
    </Row>
  );
}

export default Techstack;
