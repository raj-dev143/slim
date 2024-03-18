import React from "react";

const Faqs = () => {
  return (
    <section className="pt-5 pb-5 faqAccordion">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 hidden md:block">
            <div className="flex justify-center">
              <h2
                className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                FREQUENTLY ASKED QUESTIONS
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
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>
            <div className="flex justify-center">
              <hr className="new5 w-1/6 flex justify-center" />
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Who can consume Slim24 Pro?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Anyone above the age of 15 can consume Slim Pro health
                  nutrition.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Can Pregnant and lactating mothers can take Slim24 Pro?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Pregnant and lactating women can also take Slim Pro without
                  skipping meals. It is never advisable for pregnant women to go
                  on a diet.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How much weight one can reduce by taking it?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Ideally an overweight person can reduce 7-9 kg or more
                  depending upon the weight and body structure.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How much time it takes to see the results?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  If consumed as prescribed one can see effective results in 15
                  days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
