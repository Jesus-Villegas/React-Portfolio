// import './App.css';
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./portfolio.css";
import Project from "./Project/Project";
import DayScheduler from "../../../media/Day-Scheduler.png";
import Lowki from "../../../media/Lowki.png";
import MixedMoods from "../../../media/Mixed-Moods.png";
import StarNotes from "../../../media/star-notes.png";
import YouCode from "../../../media/YouCode.png";
import WeatherForecaster from "../../../media/Weather-Forecaster.png";

// create object for projects
const projectsObj = [
  {
    id: 1,
    name: "Day Scheduler",
    img: DayScheduler,
    deployedUrl: "https://jesus-villegas.github.io/DayScheduler/",
    githubUrl: "https://github.com/Jesus-Villegas/DayScheduler",
  },
  {
    id: 2,
    name: "Lowki",
    img: Lowki,
    deployedUrl: "https://low-ki.herokuapp.com/",
    githubUrl: "https://low-ki.herokuapp.com/",
  },
  {
    id: 3,
    name: "Mixed-Moods",
    img: MixedMoods,
    deployedUrl: "https://classique-croissant-67132.herokuapp.com/mood/pumped-up",
    githubUrl: "https://classique-croissant-67132.herokuapp.com/mood/pumped-up",
  },
  {
    id: 4,
    name: "Star-Notes",
    img: StarNotes,
    deployedUrl: "https://note-star-heroku.herokuapp.com/",
    githubUrl: "https://note-star-heroku.herokuapp.com/",
  },
  {
    id: 5,
    name: "You-Code?",
    img: YouCode,
    deployedUrl: "https://jesus-villegas.github.io/You-Code-/",
    githubUrl: "https://jesus-villegas.github.io/You-Code-/",
  },
  {
    id: 6,
    name: "Weather-Forecaster",
    img: WeatherForecaster,
    deployedUrl: "https://jesus-villegas.github.io/Weather-Forecaster/",
    githubUrl: "https://jesus-villegas.github.io/Weather-Forecaster/",
  },
];

// create component
function Portfolio() {
  return (
    <Container className="my-5">
      <h5 className="font">Portfolio</h5>
      <Container className="d-flex flex-row flex-wrap">
        {/* map through object and render each one */}
        {projectsObj.map((project) => {
          return (
            <Row className="inline" key={project.id}>
              <Project
                projectImg={project.img}
                deployedUrl={project.githubUrl}
                githubUrl={project.githubUrl}
                name={project.name}
              />
            </Row>
          );
        })}
      </Container>
    </Container>
  );
}

// export component
export default Portfolio;