import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section id="aboutus" className="container-fluid">
      <div className="pt-3 px-1">
        <div className="row">
          <div className="col-md-12 py-1 hidden md:block">
            <div className="flex justify-left md:justify-center">
              <h2
                className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase aos-init aos-animate"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                WHY US
              </h2>
            </div>
            <div className="flex justify-start md:justify-center">
              <hr className="new5 w-16 flex justify-center md:justify-center" />
            </div>
          </div>
          <div className="col-md-12 py-1 block md:hidden">
            <div className="flex justify-center">
              <h2
                className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase aos-init aos-animate"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                WHY US
              </h2>
            </div>
            <div className="flex justify-center">
              <hr className="new5 w-16 flex justify-center text-center items-center" />
            </div>
          </div>
        </div>
        <div className="pb-6 sm:pb-8 lg:py-0">
          <div className="icon-seven hidden md:block">
            <Image
              className="icon-seven-seven"
              src="/ab-nine.webp"
              alt="icon-sipper"
              width="149"
              height="309"
            />
          </div>
          <div className="icon-eight hidden md:block">
            <Image
              className="icon-eight-eight"
              src="/ab-eight.png"
              alt="icon"
              width="44"
              height="91"
            />
          </div>

          <div className="max-w-screen-2xl px-1 md:px-8 mx-auto">
            <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-2 md:gap-32">
              <div
                className="xl:w-3/5 lg:w-3/5 h-auto lg:h-auto overflow-hidden rounded-lg items-center aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <Image
                  src="/content-sec-img.webp"
                  loading="lazy"
                  alt="slim-24-product-image"
                  className="w-full h-full object-cover object-center"
                  width="525"
                  height="575"
                />
              </div>
              <div
                className="xl:w-full lg:w-3/5 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-0 aos-init"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h2 className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase">
                  Why is weight loss important for a{" "}
                  <span className="head-text">healthy life?</span>
                </h2>
                <hr className="new5 w-1/6" />
                <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 pt-3 text-justify">
                  Before you aim for weight loss, it&spos;s relevant to know the
                  value of losing weight.
                </p>
                <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 pt-0 text-justify">
                  Studies reveal that just a 5% to 10% weight loss affects your
                  health positively, so you don&spos;t have to lose tons of
                  weight to enjoy physical benefits of weight loss, just a few
                  pounds will do wonders.
                </p>
                <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 pt-0 text-justify">
                  The innumerable benefits that you gain from weight loss will
                  motivate you to accept the challenge.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
