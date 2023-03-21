import IMG02 from "../assets/img-02.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="intro">
      <div className="container">
        <div className="row">
          <h1 className=" text-center mb-5 heading">
            EXECUTIVE <span>SUMMARY</span>
          </h1>
          <div className="col-md-4 intro-top" data-aos="fade-right">
            <img src={IMG02} alt="" />
          </div>
          <div className="col-md-8 intro-content text-center text-md-start">
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
            <button
              className="btn btn-primary"
              style={{ width: "10rem" }}
              data-aos="fade-up"
            >
              <i className="bi bi-chevron-right"></i>get quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
