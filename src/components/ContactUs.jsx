import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <motion.div
            className="col"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="heading mb-3 text-center">
              contact <span>us</span>
            </h1>
          </motion.div>
          {/* FORM */}
          <div className="ro">
            <motion.div
              className="col-md-6 mx-auto"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/gauta.ncholo@gmail.com"
              ></form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
