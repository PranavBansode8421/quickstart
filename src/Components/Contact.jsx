import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6j7daza",
        "template_yodepwq",
        form.current,
        "steCnn3oiv759fbVe"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Message failed to send. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="contactlayout p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row p-4">
                <div
                  className="info-item d-flex flex-column justify-content-center align-items-center aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="row">
                <div className="px-4">
                  <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-4">
              <div className="p-4 bg-light form-wrapper">
                <form ref={form} onSubmit={sendEmail} className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="user_email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button className="btn " type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

       
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;
