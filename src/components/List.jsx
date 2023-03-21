import { motion } from "framer-motion";
import {
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
} from "../data";
import Square from "./Square";

const List = () => {
  return (
    <section style={{ overflow: "hidden" }}>
      <Square />
      <div className="container">
        {/* row 1 */}
        <div className="row">
          <motion.h1
            className="heading text-center mb-5"
            initial={{ y: "-50px" }}
            animate={{ y: "0px" }}
          >
            our<span> services</span>
          </motion.h1>
          <div className="col-lg">
            <h4 className="list-heading">Guarding Division</h4>
            <ul className="list">
              {services1.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg">
            <h4 className="list-heading">Risk Management</h4>
            <ul className="list">
              {services2.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg">
            <h4 className="list-heading">Off-Site Monitoring</h4>
            <ul className="list">
              {services3.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* row 2 */}
        <div className="row">
          <div className="col-lg">
            <h4 className="list-heading">Electronic Security</h4>
            <ul className="list">
              {services4.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg">
            <h4 className="list-heading">Online CCTV Security</h4>
            <ul className="list">
              {services5.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg">
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
