import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Logo from "../assets/UlsLogo.png";
import { Link } from "react-router-dom";
import IMG08 from "../assets/TrainingGraphic.jpg";
import IMG20 from "../assets/mobile/IMG20.png";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="intro" className="intro">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-4 intro-content text-center text-md-start px-lg-5">
            <h1 className="text-center mb-3 heading">
              EXECUTIVE <span>SUMMARY</span>
            </h1>
            <p className="lead" data-aos="fade-up">
              Upper Level Security is a 100% blacked owned company with a Level
              three (3) BEE certification.
            </p>
            <p className="lead" data-aos="fade-up">
              In the current political climate, with increasing fears of
              criminal activity, and the current economic climate, where
              unemployment is ever increasing and many young people are
              resorting to crime to fulfill their financial needs, every
              business must be protected by an acute security company which is
              dedicated and well prepared to prevent crime.
            </p>
            <p className="lead" data-aos="fade-up">
              Providing the ultimate in customer services and satisfaction along
              with building long term relationships with our clients is the
              cornerstone of our business. Upper Level Security has a reputation
              of completing its projects professionally, in time and within the
              specified budget. We specialize in all aspects of security
              including guarding division and investigations.
            </p>
            <p className="lead" data-aos="fade-up">
              The company strongly emphasizes the “satisfaction guaranteed”
              motto and works on a collaborative basis with staff and clients
            </p>
            <Link
              to="mailto:mmohau1@gmail.com"
              target="_blank"
              className="btn btn-primary mx-auto mx-md-0"
              style={{ width: "10rem" }}
              data-aos="zoom-in"
            >
              <i className="bi bi-chevron-right"></i>get quote
            </Link>

            {/* MOBILE IMG */}
            <div className="col-md d-md-none mt-5 text-center">
              <img
                src={IMG20}
                alt=""
                style={{
                  height: "15rem",
                  width: "auto",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>

          {/* TWO EMPTY DIV */}
          <div className="col-md-3"></div>
          {/* THREE */}
          <div
            className="col-12 col-lg-5 intro-content text-center text-md-start mt-5 mt-lg-0 px-lg-5"
            style={{ position: "relative" }}
          >
            <h1 className="heading mb-3 text-center">
              our <span>history</span>
            </h1>
            <p className="lead" data-aos="fade-up">
              After realizing that in this industry, every company is doing
              things the same way, lack of innovation in the industry was the
              birth of Upper Level Security.
            </p>
            <p className="lead" data-aos="fade-up">
              The founder of the company (Mohau Richard Mokoena) started working
              in the security industry as a security guard, thats when the
              desire to improve the standard of private security was realised,
              and as a strong believer in trustworthy and honest customer
              service, things played out.
            </p>
            <p className="lead" data-aos="fade-up">
              The need for that service was realized and Upper Level Security
              came to be.
            </p>
            <p className="lead" data-aos="zoom-in">
              Our previous clients include big and small organizations whom that
              we have served with pride without compromising the standard of
              service because safety is our priority.
            </p>

            {/* MOBILE IMG */}
            <div className="col-md d-md-none text-center">
              <img
                src={IMG08}
                alt=""
                style={{
                  height: "15rem",
                  width: "auto",
                  borderRadius: "20px",
                }}
              />
            </div>

            {/* LOGO MD ONLY */}
            <div
              className="d-none d-md-block"
              style={{ position: "absolute", right: "4rem", top: "-4rem" }}
            >
              <img
                src={Logo}
                alt="Upper Level Security Logo"
                style={{ width: "8rem" }}
                className="d-none d-lg-block"
              />
            </div>
            <div
              className="col-md-8 d-none d-md-block"
              style={{
                position: "absolute",
                bottom: "0",
                right: "20rem",
              }}
            >
              <p
                className="lead text-white text-center"
                style={{ fontWeight: "bold" }}
              >
                "I am not a product of my circumstances. <br /> I am a product
                of my decisions"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
