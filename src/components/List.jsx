import { motion } from "framer-motion";
import {
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
} from "../data";
import Quotes from "../assets/qu.png";
import Logo from "../assets/UlsLogo.png";
import AOS from "aos";
import { useEffect } from "react";

const List = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      className="services"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div className="container" style={{ zIndex: "90" }}>
        {/* row 1 */}
        <div className="row">
          <img
            src={Logo}
            alt="Upper Level Security Logo"
            className="d-none d-lg-block "
            style={{
              width: "10rem",
              position: "absolute",
              top: "2rem",
              left: "5rem",
            }}
          />
          <motion.h1
            className="heading text-center mb-5"
            initial={{ y: "-50px" }}
            animate={{ y: "0px" }}
          >
            our<span> services</span>
          </motion.h1>
          <div className="col-lg" style={{ zIndex: "90" }} data-aos="zoom-in">
            <h4 className="list-heading">Guarding Division</h4>
            <ul className="list">
              {services1.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg" style={{ zIndex: "90" }} data-aos="zoom-in">
            <h4 className="list-heading">Risk Management</h4>
            <ul className="list">
              {services2.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg" style={{ zIndex: "90" }} data-aos="zoom-in">
            <h4 className="list-heading">Off-Site Monitoring</h4>
            <ul className="list">
              {services3.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ABSOLUTE MD ONLY IMAGE */}
          <div className="d-none d-lg-block text-center services-graphic-x">
            <p className="lead text-white">
              Intelligent <br /> Protection
            </p>
            <img
              src={Quotes}
              alt=""
              style={{ width: "3rem", filter: "invert(100%)" }}
            />
          </div>
        </div>
        {/* row 2 */}
        <div className="row">
          <div
            className="col-12 col-lg"
            style={{ zIndex: "90" }}
            data-aos="zoom-in"
          >
            <h4 className="list-heading">Electronic Security</h4>
            <ul className="list">
              {services4.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="col-12 col-lg"
            style={{ zIndex: "90" }}
            data-aos="zoom-in"
          >
            <h4 className="list-heading">Online CCTV Security</h4>
            <ul className="list">
              {services5.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="col-12 col-lg"
            style={{ zIndex: "90" }}
            data-aos="zoom-in"
          >
            <h4 className="list-heading">Protection & Assessment</h4>
            <ul className="list">
              {services6.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
