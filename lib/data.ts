import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import saraImg from "@/public/sara_zebra.jpeg";
import flightfare from "@/public/flightfare.png";
import portfolioImg from "@/public/portfolio_img.png";
import oculusImg from "@/public/oculus.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduate Research Assistant",
    company: "University of South Florida",
    location: "Tampa, FL",
    description:
      "I worked as a Research Assistant under Dr. Alqasemi to assist him in his research in Virtual Reality.\
      Taught a class of 40+ students on Python and Robotics.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - Dec 2023",
  },
  {
    title: "Software Developer",
    company: "Zebra Technologies",
    location: "Bengaluru, IN",
    description:
      "Worked as a Backend developer to design REST endpoints to service Zebra's enterprise customers.\
      Used Java and Spring Framework to develop the APIs",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2019 - Jul 2022",
  },
  {
    title: "Software Developer Intern",
    company: "Zebra Technologies",
    location: "Bengaluru, IN",
    description:
      "Developed performance monitoring tool to extract battery metrics.\n\
      Designed an engineering toolkit to analyse OTA package signature and exposed it to front-end",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Jun 2019",
  },
] as const;

export const projectsData = [
  {
    title: "VR4VR",
    description:
      "A Virtual Reality application for Meta Oculus to access and train people with Cognitive disabilities.",
    tags: ["Unity", "CSharp"],
    imageUrl: oculusImg,
  },
  {
    title: "Smart Automated Returns Assistant",
    description:
      "A Computer Vision based application to identify fake products during returns.",
    tags: ["Java", "Deep Java Library", "PyToch", "OpenCV"],
    imageUrl: saraImg,
  },
  {
    title: "Airline Fare Prediction",
    description:
      "Predict cheap flights based on historical and time series data.",
    tags: ["Python", "NumPy", "Pandas", "Scikit Learn"],
    imageUrl: flightfare,
  },
  {
    title: "Portfolio",
    description:
      "A responsive website created with modern UI design using Next.js.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "REST API",
  "Maven",
  "Spring Boot",
  "Apache Kafka",
  "Docker",
  "Kubernetes",
  "JUnit",
  "Mockito",
  "Google Cloud Platform",
  "AWS",
  "Google Pub/Sub",
  "BigTable",
  "BigQuery",
  "PostgreSQL",
  "NOSQL",
  "Elastic Search",
  "Git",
  "Tomcat",
  "DynaTrace",
  "React",
  "Node",
  "GO",
  "gRPC",
  "OpenCV",
  "Oculus XR",
  "Prompt Engineering",
] as const;
