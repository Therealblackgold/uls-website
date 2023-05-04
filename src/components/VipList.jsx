import { vipServices1, vipServices2, vipServices3 } from "../data";
import VipGraphic from "../assets/VipGraphic.png";
import IMG08 from "../assets/mobile/IMG-08.jpg";

const VipList = () => {
  return (
    <section
      id="vip"
      className="vip"
      style={{ marginBottom: "0", position: "relative" }}
    >
      <div className="container">
        <div className="row">
          <h1 className="heading text-center mb-5">
            VIP PROTECTION/<span>CLOSE PROTECTION OFFICER</span>
          </h1>
          <div className="col-md">
            <p className="lead">
              Our VIP Protection services provide a holistic approach to close
              protection. Essentially, this means that every conceivable aspect
              that could or would impact on the health, wealth reputation and
              safety of our client (principal), is dealt with in a suitable
              manner. Transportation , route and destinations are carefully
              analysed and all conceivable risks are identified and adequate
              plans are made and put into place. Residential and hotel security
              in considered and, where needed, the principal is advised.
              <b>Bstain Security Services</b> categories its CPO’s into specific
              operational groups based on the CPO’s actual field of expertise.
              These would be:
            </p>
            <p className="lead text-dark">
              <b>Single CPO</b> Usually required for ad hoc hourly or daily work
              generally for low-key security requirements and escourting. Our
              Category 1 CPO’s are specialists in one-on-one protection,
              driving, firearm handling and basic medical support.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg">
            <h4 className="list-heading">
              Execute Protection CPO - Specializing in:
            </h4>
            <ul className="list">
              {vipServices1.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg">
            <h4 className="list-heading">Team Leader – Specializing in:</h4>
            <ul className="list">
              {vipServices2.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <h4 className="list-heading">High-Threat CPO – Specializing in:</h4>
            <ul className="list">
              {vipServices3.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE IMG */}
          <div className="col-md text-center d-md-none mt-5">
            <img
              src={IMG08}
              alt=""
              style={{ height: "20rem", width: "auto" }}
            />
          </div>
          {/* GRAPHIC */}
          <div
            className="col-md-6 d-none d-lg-block"
            style={{ position: "absolute", bottom: "0", left: "30rem" }}
          >
            <img src={VipGraphic} alt="" style={{ width: "80rem" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipList;
