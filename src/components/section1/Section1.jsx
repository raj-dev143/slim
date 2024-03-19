import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="py-6 sm:py-10 lg:pt-10">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 items-center">
          <div
            className="xl:w-3/5 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-8 items aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <h1 className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase">
              <span className="head-text">Slim 24 Pro</span> - Meal Replacement
              Shake for Healthy Weight Management
            </h1>
            <hr className="new5 w-1/6" />
            <p
              className="lg:w-full para-color md:text-1xl font-medium tracking-tight line-height-slim mb-8 md:mb-12 pt-3 text-justify aos-init"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              Slim 24 Pro is a meal replacement formula with whey protein, the
              safest form of amino acid, casein &amp; other vital nutrients that
              assist in weight loss naturally. Now, see a healthier and leaner
              you with Slim 24 Pro.
            </p>
          </div>
          <div
            className="xl:w-1/2 h-48 lg:h-auto aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <Image
              src="/image-one.webp"
              alt="slim24pro pic"
              width="574"
              height="365"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Section1;
