import { Nav, Navbar } from "react-bootstrap";
import ContactHeader from "./ContactHeader";
import LOGO from "../assets/sm-logo.png";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <>
      <ContactHeader />
      <Navbar bg="light" expand="md" className="fixed-top shadow">
        <div className="container-fluid">
          <Navbar.Brand href="#home" className="logo">
            <img src={LOGO} alt="" style={{ width: "50px" }} />
            upper level security
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link>services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link>team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/training">
                <Nav.Link>training</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
