import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../Animation/done.json";
import contactUs from "../../Animation/contactUs.json";

function Contact() {
  const [state, handleSubmit] = useForm("myyrkeok");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }

  return (
    <section id="contact" className="contact p-5 m-5  ">
      <div className="contact-header mb-5">
        <div className="contact-header-icon d-flex gap-3   justify-content-start   align-items-center  ">
          <div className="icon-envelope fs-1"></div>
          <h4 className="fs-1">Contact us</h4>
        </div>
        <p className="mt-3">
          Contact Us for more information and Get notified when i publish
          something new
        </p>
      </div>
      <div className="contact-form-and-img row text-white justify-content-center align-items-center   ">
        <div className="contact-from col-12 col-xl-6 co ">
          <form id="form" onSubmit={handleSubmit}>
            <div className="d-flex gap-3 justify-content-center align-items-center ">
              <label htmlFor="">Email:</label>
              <input
                placeholder="Email"
                className="form-control"
                type="email"
                required
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="d-flex gap-3 justify-content-center align-items-center my-4 ">
              <label htmlFor="">Massage:</label>
              <textarea
                required
                placeholder="Massage"
                className="form-control"
                name="massage"
                id=""
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="d-flex justify-content-start btn-div   ">
              <button
                onClick={() => {
                  if (state.succeeded) {
                    let form = document.getElementById("form");
                    form.reset();
                  }
                }}
                type="submit"
                disabled={state.submitting}
                className="btn submit-btn"
              >
                {state.submitting ? "Sending....." : "Send"}
              </button>
            </div>
            {state.succeeded && (
              <p className="successfully d-flex justify-content-center align-items-center ">
                <Lottie
                  loop="false"
                  style={{ width: 60 }}
                  animationData={doneAnimation}
                />
                {"Your message has been sent successfully"}
              </p>
            )}
          </form>
        </div>
        <div className=" contact-animation d-flex justify-content-between  align-items-center  contact-img col-12 col-xl-6">
          <div />
          <Lottie style={{ maxWidth: 400 }} animationData={contactUs} />
        </div>
      </div>
    </section>
  );
}
export default Contact;
