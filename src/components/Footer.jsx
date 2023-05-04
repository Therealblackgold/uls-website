import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/UlsLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="row">
          <div className="col-md text-center">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "6rem", margin: "1rem", marginTop: "5rem" }}
            />
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
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
