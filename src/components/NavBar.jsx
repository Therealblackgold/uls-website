import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import ContactHeader from "./ContactHeader";
import Logo from "../assets/UlsLogo.png";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <>
      <ContactHeader />
      <Navbar bg="light" expand="md" className="fixed-top shadow">
        <div className="container-fluid">
          <Navbar.Brand href="#home" className="logo">
            <img
              src={Logo}
              alt="Upper Level Security Logo"
              style={{ width: "50px", margin: "2px" }}
            />
            upper level security
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link className="p-1">home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link className="p-1">services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link className="p-1">team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/training">
                <Nav.Link className="p-1">training</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
