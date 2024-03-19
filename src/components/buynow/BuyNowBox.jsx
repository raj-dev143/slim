import Image from "next/image";
import Link from "next/link";
import React from "react";

const BuyNowBox = ({ title, price, symbol, link, oldPrice }) => {
  return (
    <div
      className="col-md-4 p-md-4 p-3 text-start aos-init aos-animate"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div className="box-border bg-cont">
        <div className="border-b-2 buy-product">
          <Link href={`checkout=${link}`} className="block">
            <Image
              src="/buy-slim.webp"
              className="image-dimension w-full"
              alt="slim24pro - one one get one"
              width="430"
              height="430"
            />
          </Link>
        </div>
        <div className="py-1 px-3">
          <div className="flex justify-start px-3">
            <h2 className="pt-3 fnt-buy font-medium bebas">
              <Link href={`checkout=${link}`}>{title}</Link>
            </h2>
          </div>
          <div className="flex justify-start para-color px-3 pt-2 ">
            <p className="text-lg tracking-wider font-normal">FREE SHIPPING</p>
          </div>
          <div className="flex justify-start px-3 py-2">
            <h2 className="fnt-buy font-medium price-font bebas">Price</h2>
          </div>
          <div className="py-2 bebas">
            <h2 className="font-medium px-3 text-xl md:text-4xl">
              <span className="pr-5 prize-cut text-xl md:text-4xl font-thin">
                <del>
                  {symbol}
                  {oldPrice}/-
                </del>
              </span>
              {symbol}
              {price}/-
            </h2>
          </div>
        </div>
        <div className="mt-1">
          <Link
            href={`checkout=${link}`}
            className="w-full green-bg p-2 btn-bottom fnt-weight-buy btn-block text-center bebas"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyNowBox;
