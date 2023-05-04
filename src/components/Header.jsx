import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header d-lg-none">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            {/* <h1>Lorem.</h1> */}
            <p className="text-white">
              “ Strive not to be a success, but rather to be of value ”
            </p>
            <Link
              to="mailto:mmohau1@gmail.com"
              className="btn btn-sm btn-primary"
            >
              <i className="bi bi-chevron-right"></i>get quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
