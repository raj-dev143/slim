import React from "react";
import BuyNowBox from "@/components/buynow/BuyNowBox";

const BuyNow = () => {
  return (
    <section id="ordernow">
      <div className="container bg-leaves pt-5">
        <div className="row">
          <div className="col-md-12 py-3 block">
            <div className="flex justify-center">
              <h2
                className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase aos-init aos-animate"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                BUY NOW
              </h2>
            </div>
            <div className="flex justify-center">
              <hr className="new5 w-16 flex justify-center items-center" />
            </div>
          </div>
        </div>
        <div
          id="animation-carousel"
          className="relative"
          data-carousel="static"
        >
          <div className="row my-2 px-3 px-md-5">
            <BuyNowBox
              title="ONLINE PAYMENT"
              oldPrice="5,200"
              price="2,950"
              link="online"
              symbol="₹"
            />
            <BuyNowBox
              title="CASH ON DELIVERY"
              oldPrice="5,200"
              price="2,950"
              link="cod"
              symbol="₹"
            />
            <BuyNowBox
              title="OVERSEAS DELIVERY"
              oldPrice="250"
              price="200"
              link="overseas"
              symbol="$"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
