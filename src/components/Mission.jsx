import IMG06 from "../assets/IMG-06.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="mission" id="mission" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="row">
          <h1 className="text-center heading mb-5" data-aos="fade-down">
            mission <span>statement</span>
          </h1>
          {/* vision */}
          <div className="col-md shadow" data-aos="fade-up">
            <div className="vision-content">
              <h2 className="sub-heading text-center mb-3">
                our vision<i className="bi bi-eye mx-3"></i>
              </h2>
              <ul>
                <li className="lead">
                  To contribute in fighting crime and poverty by creating
                  employment and uplifting the disadvantaged by allowing them to
                  gain and maintain skills.
                </li>
                <li className="lead">
                  To achieve excellence in safety measures and quality services.
                </li>
                <li className="lead">
                  To be the leading organization in the industry through
                  excellent service, advancing empowerment values, in motive and
                  efficient industry through training and fair remuneration.
                </li>
                <li className="lead">
                  To always be a step ahead of intruders through our partnership
                  with a local electronics device manufacturing company, that
                  will assure our clients that we well equipt with the latest
                  electronic devices set for the job at hand.
                </li>
              </ul>
            </div>
          </div>
          {/*  mission */}
          <div
            className="col-md mt-sm-5 mt-md-0 mission-content mx-md-3"
            data-aos="fade-up"
          >
            <div className="">
              <h2 className="sub-heading text-center mb-3">
                our mission<i className="bi bi-people mx-3"></i>
              </h2>
              <ul>
                <li className="lead">
                  To empower our employees to fulfill their aspirations and
                  capabilities through exchange of their honest labor.
                </li>
                <li className="lead">
                  To build a reputation of managing contracts successfully by
                  continually improving our service levels, and constantly
                  meeting our customer requirements.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  philosophy */}
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-md-8 text-center  shadow py-5 mx-auto">
            <h2 className="sub-heading">
              our philosophy<i className="bi bi-lightbulb mx-3"></i>
            </h2>
            <p className="lead">
              Driven by our core values of integrity and commitment to our
              stakeholders, excellence and professionalism in our service,
              creative concepts and the integrated team work to deliver. Upper
              Level Security Services will provide a superior service, tailor
              made to suit specific clients’ needs.
            </p>
            <div className="row">
              <div className="col-md" data-aos="zoom-in">
                <img src={IMG06} alt="" className="philosophy-img" />
              </div>
              <div
                className="col-md mt-sm-3 mt-md-0 philosophy-statement"
                data-aos="zoom-in"
              >
                <p className="lead">
                  “TO BE THE LEADING ORGANIZATION IN THE INDUSTRY”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
