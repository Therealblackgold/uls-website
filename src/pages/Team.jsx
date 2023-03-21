import { motion } from "framer-motion";
import AnimatePage from "../components/AnimatePage";
import Square from "../components/Square";
import TeamCarousel from "../components/TeamCarousel";

const Team = () => {
  return (
    <AnimatePage>
      <section
        className="team"
        id="team"
        style={{ overflow: "hidden", marginBottom: "0" }}
      >
        <Square />
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto text-center">
              <motion.h1
                className="heading text-center mb-5"
                initial={{ y: "-50px" }}
                animate={{ y: "0px" }}
              >
                our <span>team</span>
              </motion.h1>
              <h2 className="sub-heading text-center mb-2">
                COMPANY MANAGEMENT AND DIRECTORS PROFILE
              </h2>
              <p className="lead">
                We are Upper Level Security. We are a team of diverse and
                experienced professionals who operate together as a well-oiled
                machine. We work together to create dynamic solutions tailored
                to your individual needs and ensure those solutions are executed
                with integrity and quality.
              </p>
            </div>
          </div>
          {/*  */}
          <TeamCarousel />
        </div>
      </section>
    </AnimatePage>
  );
};

export default Team;
