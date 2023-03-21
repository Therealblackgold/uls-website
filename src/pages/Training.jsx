import AnimatePage from "../components/AnimatePage";
import Square from "../components/Square";
import IMG07 from "../assets/img-04.jpg";
import IMG08 from "../assets/IMG-08.jpg";
import IMG09 from "../assets/IMG-09.jpg";
import { motion } from "framer-motion";

const Training = () => {
  return (
    <AnimatePage>
      <section style={{ overflow: "hidden", marginBottom: "0" }}>
        <Square />
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto text-center">
              <motion.h1
                className="heading text-center mb-3"
                initial={{ y: "-50px" }}
                animate={{ y: "0px" }}
              >
                RECRUITMENT & <span>TRAINING</span>
              </motion.h1>
              <p className="lead">
                In order to improve a security service, well-structured and
                manpower, training is essential to get the best out of each and
                every staff in the field. All security personnel as a condition
                of employment, fully conversant and must abide by the
                regulations as set out by the Private Security Regulatory
                Authority. Our success depends on recruiting the right person
                for the job. It is therefore imperative that each officer be
                matched to the client’s requirements and expectations.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 mx-auto text-center">
              <h1 className="heading text-center mb-3 mt-5">
                ANTI-BRIBERY <span>POLICY</span>
              </h1>
              <p className="lead">
                We offer our guards rewards for reporting any criminal activity
                in the form of bribes that are offered to them. Once the
                investigation is successfully and confidentially completed the
                guard is rewarded accordingly.
              </p>
            </div>
          </div>
          <div className="row training-img-wrapper">
            <div className="col-md">
              <img src={IMG07} alt="" />
            </div>
            <div className="col-md">
              <img src={IMG08} alt="" />
            </div>
            <div className="col-md">
              <img src={IMG09} alt="" />
            </div>
          </div>
        </div>
      </section>
    </AnimatePage>
  );
};

export default Training;
