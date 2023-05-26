import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

import * as logos from "./experienceLogos";

import "./experiences.css";

function Experiences() {

  const experiences = [
    
    {
      "title": "Data Engineer Intern",
      "organization": "Celebal Technologies",
      "organizationLogo": logos.celebal,
      "duration": "May 2022 - July 2022",
      "description": [],
      "skills": "Software Development, Web Development, REST APIs, Python, SQL, Flask, HTML, CSS, Microsoft Azure",
      "experienceType": "Internship",
    },
    {
      "title": "Intern",
      "organization": "Persistant Systems",
      "organizationLogo": logos.persistant,
      "duration": "May 2022 - June 2022",
      "description": [
        "Developed frontend for fundraising portal of the organization",
        "Assisting and collaborating with the teammates to work on HTML, CSS, JS, Bootstrap, PHP and various APIs"
      ],
      "skills": "Front-End Development, Computer Networks, Operating System, Linux, DBMS, OPPS, Java, Python",
      "experienceType": "Internship",
    },
    {
      "title": "Full Stack Android Developer",
      "organization": "CODEKUL Private Limited",
      "organizationLogo": logos.codekul,
      "duration": "August 2021 - September 2021",
      "description": [
        "Built an API using Django Rest Framework for the EdTech startup.",
        "Scraped websites for course information and built production ready API",
      ],
      "skills": "Object-Oriented Programming (OOP), Java, MYSQL,Retrofit, REST APIs, App Development",
      "experienceType": "Internship",
    },
    {
      "title": "Co-ordinator",
      "organization": "Coding Club, MITAOE",
      "organizationLogo": logos.codingclub,
      "duration": "Oct 2020 - July 2021",
      "description": [],
      "skills": "Front-End Development , DSA , Coding Skills",
      "experienceType": "College Club",
    },
  ]

  return (
    <Container className="py-5 mt-5">
      <Particle />
      <div className="main-timeline">
        {
          experiences.map((experience, index) => {
            return (
              <div className={`timeline ${index % 2 === 0 ? "left" : "right"}`}>
                <ExperienceCard title={experience.title} duration={experience.duration} organization={experience.organization} description={experience.description} experienceType={experience.experienceType} skills={experience.skills} organizationLogo={experience.organizationLogo} disabledProps={["description"]} />
              </div>
            )
          })
        }
      </div>
    </Container>
  );
}

export default Experiences;