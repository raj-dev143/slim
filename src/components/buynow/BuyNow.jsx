import Image from "next/image";
import React from "react";

const BuyNow = () => {
  return (
    <section id="ordernow">
      <div className="container bg-leaves pt-5">
        <div className="row">
          <div className="col-md-12 py-5 hidden md:block">
            <div className="flex justify-left md:justify-center">
              <h2
                className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase aos-init aos-animate"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                BUY NOW
              </h2>
            </div>
            <div className="flex justify-start md:justify-center">
              <hr className="new5 w-24 flex justify-center md:justify-center" />
            </div>
          </div>
          <div className="col-md-12 py-3 block md:hidden">
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
            <div
              className="col-md-4 p-md-4 p-3 text-start aos-init aos-animate"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="box-border bg-cont">
                <div className="flex justify-between border-b-2 buy-product">
                  <a href="buynow.php?checkout=online">
                    <Image
                      src="/buy-slim.webp"
                      className="image-dimension w-100"
                      alt="slim24pro - one one get one"
                      width="430"
                      height="430"
                    />
                  </a>
                </div>
                <div className="py-1 px-3">
                  <div className="flex justify-start px-3">
                    <h2 className="pt-3 fnt-buy font-medium bebas">
                      <a href="buynow.php?checkout=online">ONLINE PAYMENT</a>
                    </h2>
                  </div>
                  <div className="flex justify-start para-color px-3 pt-2 ">
                    <p className="text-lg tracking-wider font-normal">
                      FREE SHIPPING
                    </p>
                  </div>
                  <div className="flex justify-start px-3 py-2">
                    <h2 className="fnt-buy font-medium price-font bebas">
                      Price
                    </h2>
                  </div>
                  <div className="py-2 bebas">
                    <h2 className="font-medium px-3 text-xl md:text-4xl">
                      <span className="pr-5 prize-cut text-xl md:text-4xl font-thin">
                        <del>₹5,200/-</del>
                      </span>
                      ₹2,950/-
                    </h2>
                  </div>
                </div>
                <div className="mt-1">
                  <a
                    href="buynow.php?checkout=online"
                    className="w-full green-bg p-2 btn-bottom fnt-weight-buy btn-block text-center bebas"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 p-md-4 p-3 text-start aos-init aos-animate"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="box-border bg-cont">
                <div className="flex justify-between border-b-2 buy-product">
                  <a href="buynow.php?checkout=cod">
                    <Image
                      src="/buy-slim.webp"
                      className="image-dimension w-100"
                      alt="slim-buy-now-product"
                      width="430"
                      height="430"
                    />
                  </a>
                  <div className="ribbon-wrapper-green">
                    <div className="ribbon-green">EXCLUSIVE</div>
                  </div>
                </div>
                <div className="py-1 px-3">
                  <div className="flex justify-start px-3">
                    <h2 className="pt-3 fnt-buy font-medium bebas">
                      <a href="buynow.php?checkout=cod">CASH ON DELIVERY</a>
                    </h2>
                  </div>
                  <div className="flex justify-start para-color px-3 pt-2 ">
                    <p className="text-lg tracking-wider font-normal">
                      FREE SHIPPING
                    </p>
                  </div>
                  <div className="flex justify-start px-3 py-2">
                    <h2 className="fnt-buy font-medium price-font bebas">
                      Price
                    </h2>
                  </div>
                  <div className="py-2 bebas">
                    <h2 className="font-medium px-3 text-xl md:text-4xl">
                      <span className="pr-5 prize-cut text-xl md:text-4xl font-thin">
                        <del>₹5,200/-</del>
                      </span>
                      ₹2,950/-
                    </h2>
                  </div>
                </div>
                <div className="mt-1">
                  <a
                    href="buynow.php?checkout=cod"
                    className="w-full green-bg p-2 btn-bottom fnt-weight-buy btn-block text-center bebas"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 p-md-4 p-3 text-start aos-init aos-animate"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="box-border bg-cont">
                <div className="flex justify-between border-b-2 buy-product">
                  <a href="buynow.php?checkout=overseas">
                    <Image
                      src="/buy-slim.webp"
                      className="image-dimension w-100"
                      alt="slim24pro - buy now"
                      width="430"
                      height="430"
                    />
                  </a>
                </div>
                <div className="py-1 px-3">
                  <div className="flex justify-start px-3">
                    <h2 className="pt-3 fnt-buy font-medium bebas">
                      <a href="buynow.php?checkout=overseas">
                        OVERSEAS DELIVERY
                      </a>
                    </h2>
                  </div>
                  <div className="flex justify-start para-color px-3 pt-2 ">
                    <p className="text-lg tracking-wider font-normal">
                      FREE SHIPPING
                    </p>
                  </div>
                  <div className="flex justify-start px-3 py-2">
                    <h2 className="fnt-buy font-medium price-font bebas">
                      Price
                    </h2>
                  </div>
                  <div className="py-2 bebas">
                    <h2 className="font-medium px-3 text-xl md:text-4xl">
                      <span className="pr-5 prize-cut text-xl	md:text-4xl font-thin">
                        <del>$250</del>
                      </span>
                      $200
                    </h2>
                  </div>
                </div>
                <div className="mt-1">
                  <a
                    href="buynow.php?checkout=overseas"
                    className="w-full green-bg p-2 btn-bottom btn-block text-center fnt-weight-buy bebas"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
