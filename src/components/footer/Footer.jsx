import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="grid-footer grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
        <div className="item1 w-full">
          <div className="flex justify-center md:justify-start px-16">
            <Image
              src="/slim24pro.svg"
              alt="slim24pro"
              width="188"
              height="67"
            />
          </div>
          <div className="pt-4 flex justify-start px-16">
            <p className="text-lg font-medium text-start text-white">
              Slim 24 Pro Meal Replacement Shake for Healthy Weight Management
            </p>
          </div>
          <div className="footer-imgg xl:block lg:hidden hidden">
            <Image
              src="/footer-line.png"
              alt="footer-line"
              className="footer-line footer-imgg-img"
              width="333"
              height="232"
            />
          </div>
        </div>
        <div className="item2">
          <div className="flex justify-center md:justify-start px-16">
            <h3 className="text-uppercase font-extrabold text-2xl text-white">
              PAGES
            </h3>
          </div>
          <div className="flex justify-center md:justify-start pt-3">
            <ul className="list-unstyled px-16">
              <li className="flex justify-center md:justify-start py-2">
                <a href="/" className="text-lg font-medium">
                  Home
                </a>
              </li>
              <li className="flex justify-center md:justify-start py-2">
                <a href="/#aboutus" className="text-lg font-medium">
                  About
                </a>
              </li>
              <li className="flex justify-center md:justify-start py-2">
                <a href="/blog/" className="text-lg font-medium">
                  Blog
                </a>
              </li>
              <li className="flex justify-center md:justify-start  py-2">
                <a
                  href="/terms-conditions.html"
                  className="text-lg font-medium"
                >
                  Terms and Conditions
                </a>
              </li>
              <li className="flex justify-center md:justify-start  py-2">
                <a href="/privacy-policy.html" className="text-lg font-medium">
                  Privacy Policy
                </a>
              </li>
              <li className="flex justify-center md:justify-start  py-2">
                <a href="/return-refund.html" className="text-lg font-medium">
                  Return And Refund
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item3 ">
          <div
            className="flex justify-center md:justify-start px-16"
            style={{ paddingTop: "10px" }}
          >
            <h3 className="text-uppercase font-extrabold text-2xl text-white">
              EMAIL
            </h3>
          </div>
          <div className="flex justify-center md:justify-start px-16 footer-info">
            <div className="">
              <div>
                <p className="pt-3 lg:text-lg  text-sm font-medium">
                  <a href="mailto:info@slim24pro.com">info@slim24pro.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="item4">
          <div className="flex justify-center md:justify-start px-16">
            <h3 className="text-uppercase font-extrabold text-2xl text-white">
              Address
            </h3>
          </div>
          <div className="flex justify-start md:justify-start px-16 footer-info">
            <p className="pt-3 lg:text-lg  text-sm font-medium">
              701, ATULYA IT PARK, BHAWARKUAN, INDORE 452016
            </p>
          </div>
        </div>
        <div className="item5">
          <div className="flex justify-center md:justify-start px-16">
            <h3 className="text-uppercase font-extrabold text-2xl text-white">
              Contact Info
            </h3>
          </div>
          <div className="footer-info">
            <p className="pt-3 py-2 text-lg  font-medium flex justify-center md:justify-start px-16">
              <a href="tel:+919229337811">+91 - 9229337811</a>
            </p>
            <p className="py-2 text-lg  font-medium flex justify-center md:justify-start px-16">
              <a href="tel:+919229337813">+91 - 9229337813</a>
            </p>
          </div>
        </div>
        <div className="item6">
          <div className="flex justify-center md:justify-start px-16">
            <h3 className="text-uppercase font-extrabold text-2xl text-white">
              KEEP IN TOUCH
            </h3>
          </div>
          <div className="pt-3 flex justify-center md:justify-start px-16 text-sm md:text-lg">
            <a
              href="https://www.facebook.com/Slim24Pro/"
              target="_blank"
              rel="noopener"
              className="mr-3"
            >
              <Image
                width={40}
                height={40}
                src="/facebook.svg"
                alt="facebook"
              />
            </a>
            <a href="/" className="mr-3">
              <Image
                width={40}
                height={40}
                src="/linkedin.svg"
                alt="linkedin"
              />
            </a>
            <a href="/" className="mr-3" aria-hidden="true">
              <Image width={40} height={40} src="/youtube.svg" alt="youtube" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3 text-white text-lg foo-bottom"
        style={{ backgroundColor: "#4B4B4B" }}
      >
        © Copyright <span id="currentYear">2024</span>,{" "}
        <a className="text-white" href="/">
          Slim24Pro
        </a>{" "}
        All rights reserved.
      </div>
      <a id="cta" href="tel:+919229337811">
        <Image
          src="/call-now.svg"
          title=""
          alt="Call Now"
          width="250"
          height="127"
        />
      </a>
    </footer>
  );
};

export default Footer;
