import { vipServices1, vipServices2, vipServices3 } from "../data";

const VipList = () => {
  return (
    <section style={{ marginBottom: "0" }}>
      <div className="container">
        <div className="row">
          <h1 className="heading text-center mb-5">
            VIP PROTECTION/<span>BODYGUARDING</span>
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
            <p className="lead">
              <b>Single CPO</b> Usually required for ad hoc hourly or daily work
              generally for low-key security requirements and escourting. Our
              Category 1 CPO’s are specialists in one-on-one protection,
              driving, firearm handling and basic medical support.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
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
          <div className="col-lg">
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
          <div className="col-lg">
            <div className="col-lg">
              <h4 className="list-heading">
                High-Threat CPO – Specializing in:
              </h4>
              <ul className="list">
                {vipServices3.map((service, index) => (
                  <li key={index} className="lead">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipList;
