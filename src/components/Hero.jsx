import LOGO from "../assets/lg-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header className="hero" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="row hero-wrapper mt-5">
          <div className="col-md hero-left" data-aos="zoom-in">
            <h1 className="heading">
              UPPER LEVEL <span>SECURITY</span>
            </h1>
            <p className="lead">
              Upper Level Security prides its-self in striving for excellence
              and its continuous improvement in the security sector. It is
              therefore its policy to formulate ‘Quality Management Systems’.
              Specifically designed for each of our business partner’s unique
              requirements, rather than a general approach.
            </p>
            <button className="btn btn-lg btn-outline-primary shadow">
              <i className="bi bi-chevron-right"></i>get free quote
            </button>
            <button className="btn btn-lg btn-primary mx-3 shadow mt-md-3  mb-md-5 mt-lg-0 mb-lg-0">
              <i className="bi bi-chevron-right"></i>view services
            </button>
          </div>
          <div className="col-md hero-right mt-sm-5 mt-md-0" data-aos="zoom-in">
            <img src={LOGO} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
