import Image from "next/image";
import React from "react";

const Section5 = () => {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-8">
      <div className="icon-two">
        <Image
          className="icon-two-two"
          src="/ab-three.png"
          alt="slim24pro icon2"
          width="64"
          height="64"
        />
      </div>
      <div className="icon-three">
        <Image
          className="icon-three-three"
          src="/ab-four.png"
          alt="slim24pro icon3"
          width="16"
          height="16"
        />
      </div>
      <div className="icon-four">
        <Image
          className="icon-four-four"
          src="/ab-five.png"
          alt="slim24pro icon4"
          width="44"
          height="44"
        />
      </div>
      <div className="icon-six">
        <Image
          className="icon-six-six"
          src="/ab-seven.webp"
          alt="slim24pro icon5"
          width="243"
          height="422"
        />
      </div>
      <div className="max-w-screen-2xl px-1 md:px-8 mx-auto ">
        <section className="w-full container flex flex-col lg:flex-row justify-between gap-6 sm:gap-2 md:gap-20 items-center py-5">
          <div
            className="xl:w-3/5 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-8 aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <h2 className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase">
              How
              <span className="head-text">Slim24 Pro</span> helps lose weight
              and Why It&spos;s the best food/meal replacement?
            </h2>
            <hr className="new5 w-1/6 h-1 bg-[#406213] opacity-100" />
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 pt-3 text-justify">
              Slim24 Pro is a low calorie meal replacement shake with whey
              protein, casein protein and a blend of various vital nutrients.
              Low calorie content in this formula reduces the calorie intake per
              meal, building a calorie gap in the body, which in turn activates
              the weight loss process.
            </p>
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 pt-0 text-justify">
              This weight loss shake revives energy, enhances immune system,
              contains rich vitamins and is high in antioxidants.
            </p>
            <p></p>
          </div>
          <div
            className="xl:w-2/5 rounded-lg items-center aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <Image
              src="/image-one.webp"
              alt="slim24pro"
              width="567"
              height="361"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section5;
