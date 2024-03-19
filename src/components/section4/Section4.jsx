import React from "react";

const Section4 = () => {
  return (
    <section className="hidden md:block 2xl:py-10 xl:py-10 lg:py-10 md:py-10 ">
      <div className="2xl:py-10 xl:py-10 lg:py-10 md:py-10 back-img">
        <h2 className="container bebas tracking-wide text-white text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase">
          Benefits of Meal Replacement Formula
          <hr className="new5-yellow w-20 mt-2 h-1 bg-[#ffb612] opacity-100 border-[#ffb612]" />
        </h2>
        <ul className="container lg:text-2xl md:text-xl text-lg pt-2 pl-9">
          <li className="mb-2 text-white font-medium tracking-wider list-disc">
            Stimulates Muscle Growth
          </li>
          <li className="mb-2 text-white font-medium tracking-wider list-disc">
            Boosts Metabolism
          </li>
          <li className="mb-2 text-white font-medium tracking-wider list-disc">
            Brings down fat accumulation
          </li>
          <li className="mb-2 text-white font-medium tracking-wider list-disc">
            Checks unhealthy cravings
          </li>
          <li className="mb-2 text-white font-medium tracking-wider list-disc">
            Assures leaner and healthier body
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section4;
