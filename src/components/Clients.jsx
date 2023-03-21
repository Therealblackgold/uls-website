import CLIENT01 from "../assets/BRAND-1.png";
import CLIENT02 from "../assets/BRAND-3.png";
import CLIENT03 from "../assets/BRAND-2.png";
import CLIENT04 from "../assets/BRAND-4.png";
import CLIENT05 from "../assets/BRAND-5.png";
import CLIENT06 from "../assets/BRAND-6.png";
import CLIENT07 from "../assets/BRAND-7.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section style={{ overflow: "hidden", marginBottom: "0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h1 className="heading text-center mb-5" data-aos="fade-down">
              previous & <span>current clients</span>
            </h1>
            <div
              className="clients-wrapper text-center mb-5"
              data-aos="fade-up"
            >
              <div className="row">
                <div className="col-md">
                  <img src={CLIENT01} alt="Bidvest" />
                </div>
                <div className="col-md">
                  <img src={CLIENT02} alt="Upward Spiral" />
                </div>
                <div className="col-md">
                  <img src={CLIENT03} alt="Upward Spiral" />
                </div>
                <div className="col-md">
                  <img src={CLIENT04} alt="Upward Spiral" />
                </div>
                <div className="col-md">
                  <img src={CLIENT05} alt="Upward Spiral" />
                </div>
                <div className="col-md">
                  <img src={CLIENT06} alt="Upward Spiral" />
                </div>
                <div className="col-md">
                  <img src={CLIENT07} alt="Upward Spiral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* closing statement */}
        <div className="row">
          <div className="col-md-8 mx-auto text-center" data-aos="fade-up">
            <h2 className="sub-heading text-dark">upper level security </h2>
            <p className="lead" data-aos="fade-up">
              Upper Level Security prides its-self in striving for excellence
              and its continuous improvement in the security sector. It is
              therefore its policy to formulate ‘Quality Management Systems’.
              Specifically designed for each of our business partner’s unique
              requirements, rather than a general approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
