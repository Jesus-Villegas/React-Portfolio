// import components
import React from "react";
import { Container, Button } from "react-bootstrap";
// import myRes from "../../../assets/files/.docx";

// object for experience
const workExperience = {
  audit: `Highly creative and versatile graphic designer who worships art. I contain experience in the field of managing identity,posting media,
  and in website design. Proficient in Photoshop and Adobe Illustrator, strong organizational skills and communication skills. Also knowledge of Premier Pro.
  Profiient in full-stack development.`,
  milehighClub: `Enhancing t-shirt and web designs using Adobe Illustrator, responsible for breaking down and building the sets, props, and equipment,
   and managing day to day operations. Responsible for creating and maintaining content in flow.`,
};

// create component
function Resume() {
  return (
    <Container className="my-5">
      <section className="d-flex flex-direction-row align-items-end justify-content-between my-3">
        <h5 className="m-0">Resume</h5>
        <Button
          variant="info"
          download
          rel="noopener noreferrer"
          target="_blank"
          className="fa fa-download"
          // href={myRes}
        >
          Click to Dowload
        </Button>{" "}
      </section>
      <section className="my-5">
        <h6>
          <strong>Skills:</strong>
        </h6>
        <p>
          Illustrator, Photoshop, Photography, Media Manager,
          HTML, CSS , ReactJS, TypeScript, Flow, Bootstrap,
          JavaScript(jQuery, OOP), AJAX, JSON,
          jQuery, GraphQL, NodeJS, Testing, Git, Mongo, SQL.
          Mobile Design, Cross-browser compatibility, Scrum.
        </p>
      </section>
      <section className="my-3">
        <h6>
          <strong>Experience:</strong>
        </h6>
        <p className="d-flex flex-column">
          <strong>
            08/18 – 09/21 Graphic-Designer, Mile-High-Club, Los
            Angeles, CA{" "}
          </strong>{" "}
          {workExperience.audit}
        </p>
        <p className="d-flex flex-column">
          <strong>
          08/18 – 09/21 Photographer, Mile-High-Club, Los
            Angeles, CA{" "}
          </strong>{" "}
          {workExperience.milehighClub}
        </p>
      </section>
    </Container>
  );
}

export default Resume;