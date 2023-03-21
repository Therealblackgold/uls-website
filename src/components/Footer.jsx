import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/lg-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="logo" style={{ width: "6rem" }} />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="tel:011732 1004">
                <span>
                  <i className="bi bi-telephone-fill"></i>(011) 732 1004
                </span>
              </a>
              <a href="mailto:mmohau1@gmail.com">
                <span>
                  <i className="bi bi-envelope-fill"></i>mmohau1@gmail.com
                </span>
              </a>
              <a href="https://www.upperlevelsecurity.co.za">
                <span>
                  <i className="bi bi-globe-central-south-asia"></i>
                  upperlevelsecurity.co.za
                </span>
              </a>
            </div>
            <p>All Rights Reserved UPPER LEVEL SECURITY &copy; </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
