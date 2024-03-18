import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-2 md:gap-32 items-center lg:mt-24 md:mt-24">
      <div
        className="xl:w-12/12 lg:ml-20 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-8 hidden md:block aos-init aos-animate"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <h2 className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase">
          How To Use <span className="head-text">Slim 24 Pro</span> Meal
          Replacement Drink
        </h2>
        <hr className="new5 w-1/6" />
        <p className="lg:w-full para-color md:text-1xl font-medium tracking-wider line-height-para mb-8 md:mb-12 pt-3 text-justify ">
          Mix 2 scoops of Slim Pro in a glass of water, juice, low fat milk or
          curd. Take this shake preferably at night replacing it with your
          dinner.
        </p>
      </div>
      <div
        className="xl:w-6/6 rounded-lg items-center hidden md:block aos-init aos-animate"
        data-aos="fade-left"
      >
        <Image
          src="/htu.webp"
          alt="slim24pro - Meal Replacement Drink"
          className="video-use"
          width="1127"
          height="594"
        />
      </div>

      <div
        className="container block md:hidden aos-init aos-animate"
        data-aos="fade-up"
      >
        <div
          className="xl:w-6/12 xl:ml-44 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-8 aos-init aos-animate"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <h2 className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase">
            How To Use <span className="head-text">Slim 24 Pro</span> Meal
            Replacement Drink
          </h2>
          <hr className="new5 w-1/6" />
          <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-12 pt-3 text-justify ">
            Mix 2 scoops of Slim Pro in a glass of water, juice, low fat milk or
            curd. Take this shake preferably at night replacing it with your
            dinner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section7;
