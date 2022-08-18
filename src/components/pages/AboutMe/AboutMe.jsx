// import components
import React from "react";
import "./aboutme.css";
import { Container, Image } from "react-bootstrap";
import ProfilePicture from "../../../media/IMG_ME.JPG";

// var for text on page
const aboutMeText = `Hey, I am Jesus Villegas and welcome. I have created various of small projects that are in my portfolio. I have delivered many of smart cutting-edge user
interfaces that intergate my passion with my work. I have worked for a start-up company in which I was responsible for many aspects even outside
of my comfortzone, yet I delivered. I have many skills and aspirations that drive me towards grater heights. Now enough said, less talking more coding!`;

// create component
function AboutMe() {
  return (
<body className="body">
    <Container className="down">
      <section className="nav">
        <h5 className="font">About Me</h5>
      </section>
      <section className="pic">
        <Image src={ProfilePicture} className="img-thumbnail" rounded={true} />
      </section>
      <div className="text">
        {aboutMeText}
        </div>
    </Container>
    </body>
  );
}

// export
export default AboutMe;