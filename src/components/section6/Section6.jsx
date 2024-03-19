import Image from "next/image";
import React from "react";

const Section6 = () => {
  return (
    <section className="pb-6 pt-10 sm:pb-8 lg:py-0">
      <div className="icon-ten">
        <Image
          className="icon-ten-ten"
          src="/ab-four.png"
          alt="slim24pro pic"
          width="16"
          height="16"
        />
      </div>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto hidden md:block">
        <section className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-2 md:gap-8">
          <div
            className="xl:w-4/5 h-auto lg:h-1/2 overflow-hidden items-center flex justify-center aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <Image
              src="/image-two.webp"
              loading="lazy"
              alt="How Slim24 pro Replaces Your Complete Meal and Fulfills Your Daily Nutritional Needs?"
              className="object-cover object-center"
              width="586"
              height="647"
            />
          </div>
          <div
            className="xl:w-full flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-0 aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <h2 className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase">
              How
              <span className="head-text">Slim24 Pro</span> replaces your
              complete meal and fulfills your daily nutritional needs?
            </h2>
            <hr className="new5 w-1/6" />
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 pt-3 text-justify">
              Every individual has different nutritional requirements based on
              their gender, height, fitness goals, and overall health. This
              shake is formulated as per these daily nutritional needs.
            </p>
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 text-justify">
              It contains vital nutrients such as minerals, potassium, and
              antioxidant in addition to whey protein and casein that helps the
              body to absorb nutrients from your food more efficiently.
            </p>
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 text-justify">
              It also has all the major vitamins such as vitamin K and D3,
              minerals, fatty acids and the requisite fiber needed to support a
              healthy body.
            </p>
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 text-justify">
              It contains Gum Acacia that reduces blood glucose and insulin
              levels after it is taken with meal containing carbohydrate that
              raises blood glucose levels.
            </p>
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 text-justify">
              Slim24 Pro shake gives you nutrition equivalent to a meal, but
              lesser in calorie. It supports weight management naturally and
              boosts metabolism.
            </p>
          </div>
        </section>
      </div>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto block md:hidden">
        <section className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-2 md:gap-8">
          <div
            className="xl:w-full flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-0 aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <h2 className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase">
              How
              <span className="head-text">Slim 24 Pro</span> Replaces Your
              Complete Meal And Fulfills Your Daily Nutritional Needs?
            </h2>
            <hr className="new5 w-1/6" />
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-12 pt-3 text-justify">
              Every Individual Has Different Nutritional Requirements Based On
              Their Gender, Height, Fitness Goals, And Over
              <br />
              All Health. This Shake Is Formula Tedas Per These Daily
              Nutritional Needs.
              <br />
              <br />
              It Contains Vital Nutrients Such As Minerals, Potassium, And
              Antioxidantin Addition To Whey Protein And Casein That Helps The
              Body To Absorb Nutrients From Your Food More Efficiently.
              <br />
              <br />
              It also has all the major vitamins such as vitamin K and D3,
              minerals, fatty acids and the requisite fiber needed to support a
              healthy body.
            </p>
          </div>
          <div
            className="xl:w-4/5 h-auto lg:h-1/2 overflow-hidden items-center flex justify-center aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <Image
              src="/image-two.webp"
              loading="lazy"
              alt="How Slim24 pro Replaces Your Complete Meal and Fulfills Your Daily Nutritional Needs?"
              className="object-cover object-center"
              width="586"
              height="647"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Section6;
