import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section-6 pb-100">
      <div className="container">
        <div className="rounded-bg">
          <form method="post" action="cntc.php">
            <div className="row align-items-center">
              <div className="col-md-3 text-center text-md-end">
                <div className="contact-info pe-4">
                  <address className="addClass">
                    7th Floor Atulya IT
                    <br /> Park Indore (M.P.) - 452016
                  </address>
                  <a href="tel:+919229337811" className="call">
                    +91 - 9229 337 811
                  </a>
                  <a href="mailto:info@slim24pro.com" className="email">
                    info@slim24pro.com
                  </a>
                </div>
              </div>
              <div className="col-md-6 border-start">
                <div className="inquiry-form px-4 h-100">
                  <div className="row">
                    <div className="col-md-12 py-5 hidden md:block">
                      <div className="flex justify-center">
                        <h2
                          className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase"
                          data-aos="zoom-in-up"
                          data-aos-duration="1000"
                        >
                          send a request for a product
                        </h2>
                      </div>
                      <div className="flex justify-start md:justify-center">
                        <hr className="new5 w-1/6 flex justify-start md:justify-center" />
                      </div>
                    </div>
                    <div className="col-md-12 py-5 block md:hidden">
                      <div className="flex justify-center">
                        <h2
                          className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-center text-uppercase"
                          data-aos="zoom-in-up"
                          data-aos-duration="1000"
                        >
                          send a request for a product
                        </h2>
                      </div>
                      <div className="flex justify-center">
                        <hr className="new5 w-1/6 flex justify-center" />
                      </div>
                    </div>
                  </div>
                  <div className="position-relative mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                      name="name"
                      required
                    />
                    <span className="bottom-border"></span>
                  </div>
                  <div className="position-relative mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contact Number"
                      name="phone"
                      required
                    />
                    <span className="bottom-border"></span>
                  </div>
                  <div className="position-relative mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Id"
                      name="email"
                      pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                      required
                    />
                    <span className="bottom-border"></span>
                  </div>
                  <div className="position-relative mb-3">
                    <textarea
                      className="form-control"
                      name="remark"
                      rows="4"
                      cols="80"
                      placeholder="Message"
                    ></textarea>
                    <span className="bottom-border"></span>
                  </div>

                  <div className="row pt-md-4">
                    <div className="col-md-7 position-relative mb-3">
                      <input
                        type="text"
                        placeholder="Enter Image Captcha"
                        className="form-control"
                        name="captcha"
                        required
                      />
                      <span className="bottom-border"></span>
                    </div>
                    <div className="col-md-5">
                      {/* <Image src="captcha.php" className="img-fluid" alt="Captcha" width="150"
                                      height="52" /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="mb-3">
                  <button
                    className="inquiry-btn text-uppercase"
                    type="submit"
                    name="submit"
                  >
                    <Image
                      src="/send-icon.png"
                      alt="icon"
                      width="23"
                      height="30"
                    />
                    <span className="d-block">Inquire Now</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
