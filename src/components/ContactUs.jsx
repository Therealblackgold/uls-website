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
            <h1 className="heading mb-3 text-center text-white">
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
                className="text-white"
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/c970bc0f5121281884723ee4b465aec2"
              >
                <div>
                  {/* NAME */}
                  <div className="mb-3">
                    <input
                      placeholder="Name"
                      type="text"
                      className="form-control"
                      {...register("name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {/* NAME INPUT ERRORS */}
                    {errors.name && (
                      <p className="lead mt-3 text-danger">
                        {errors.name.type === "required" &&
                          "This field is required."}
                        {errors.name.type === "maxLength" &&
                          "Max length is 100 characters."}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div className="mb-3">
                    <input
                      placeholder="Email"
                      type="email"
                      className="form-control"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {/* EMAIL INPUT ERROR HANDLING */}
                    {errors.email && (
                      <p className="lead mt-3 text-danger">
                        {errors.email.type === "required" &&
                          "This field is required."}
                        {errors.email.type === "pattern" &&
                          "Invalid  email address"}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div className="mb-3">
                    <textarea
                      placeholder="Message"
                      rows={4}
                      cols={50}
                      className="form-control"
                      {...register("message", {
                        required: true,
                        maxLength: 2000,
                      })}
                    />
                    {/* MESSAGE INPUT ERRORS */}
                    {errors.message && (
                      <p className="lead mt-3 text-danger">
                        {errors.message.type === "required" &&
                          "This field is required."}
                        {errors.message.type === "maxLength" &&
                          "Max length is 2000 characters."}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg btn-primary w-100"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
