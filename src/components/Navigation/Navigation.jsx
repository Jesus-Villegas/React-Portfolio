// import components
import "./Navigation.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';

// creat component
function Navigation({ handlePageChange, currentPage }) {
  // active key for nav bar to track current page
  const activeKey =
    currentPage === "Home"
      ? 1
      : currentPage === "Portfolio"
      ? 2
      : currentPage === "Contact"
      ? 3
      : 4;

  return (
    <Navbar.Collapse id="basic-navbar-nav w-50">
      <Nav className=" bottom" activeKey={activeKey}>
        <Nav.Link className="space"
          eventKey={1}
          href="#home"
          onClick={() => handlePageChange("Home")}
          style={{ width: "100px"}}
        ><Button className = "button" variant="warning">About Me</Button>     
        </Nav.Link>
        <Nav.Link className="space"
          eventKey={2}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          style={{ width: "100px" }}
        ><Button className = "button" variant="warning">Portfolio</Button>   
        </Nav.Link>
        <Nav.Link className="space"
          eventKey={3}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          style={{ width: "100px" }}
        ><Button className = "button" variant="warning">Contact</Button> 
        </Nav.Link>
        <Nav.Link className="space"
          eventKey={4}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          style={{ width: "100px" }}
        ><Button className = "button" variant="warning">Resume</Button> 
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
}

export default Navigation;