import IMG03 from "../assets/img-03.jpg";
import IMG04 from "../assets/img-04.jpg";
import IMG05 from "../assets/img-05.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <h1 className="heading text-center mb-5" data-aos="fade-down">
            our <span>history</span>
          </h1>
          <div className="col-md-6 about-content">
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
            <p className="lead" data-aos="fade-up">
              Our previous clients include big and small organizations whom that
              we have served with pride without compromising the standard of
              service because safety is our priority.
            </p>
          </div>
          <div className="col-md" data-aos="zoom-in">
            <img src={IMG04} alt="" className="mb-2" />
            <img src={IMG05} alt="" />
          </div>
          <div className="col-md" data-aos="zoom-in">
            <img src={IMG03} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
