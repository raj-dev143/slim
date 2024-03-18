"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);
  return (
    <section id="testimonial" className="testimonial pt-1 pb-5">
      <div className="icon-one"></div>
      <div className="icon-faq"></div>
      <div className="container px-md-5 bg-white bg-cont faq-border">
        <div className="reviews">
          <div className="col-md-12 py-5 hidden md:block">
            <div className="flex justify-center">
              <h2
                className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                Customer Testimonial & Product Review
              </h2>
            </div>
            <div className="flex justify-start md:justify-center">
              <hr className="new5 w-1/6 flex justify-start md:justify-center" />
            </div>
          </div>
          <div className="col-md-12 py-5 block md:hidden">
            <div
              className="flex justify-center"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h2 className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-center text-uppercase items-center flex justify-center">
                Customer Testimonial & Product Review
              </h2>
            </div>
            <div className="flex justify-center">
              <hr className="new5 w-1/6 flex justify-center items-center" />
            </div>
          </div>
          <div className="flex justify-between items-start cc-review-row">
            <div
              className="col-md-4 col-lg-3 items-center px-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex items-center gap-3">
                <h2 className="h3 mb-3 text-yellow font-weight-medium">
                  <span className="text-3xl font-weight-medium">4.8</span>
                </h2>
                <div className="star-rating mr-2">
                  <Image
                    src="/5-ratings.svg"
                    alt="4 Star"
                    width="128"
                    height="16"
                  />
                </div>
              </div>
              <p className="pt-3 mb-md-0 text-xl">Based on 14,330 Reviews</p>
            </div>
            <div
              className="col-md-4 col-lg-4 rating-number px-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap mr-3">
                  <Image
                    src="/blank-rating.svg"
                    alt="Ratings"
                    width="128"
                    height="16"
                  />
                </div>
                <div className="w-100">
                  <div className="progress colr-yel">
                    <div
                      className="progress-bar"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <span className="fnt-color font-normal ml-3">(12666)</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap mr-3">
                  <Image
                    src="/blank-rating.svg"
                    alt="Ratings"
                    width="128"
                    height="16"
                  />
                </div>
                <div className="w-100">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
                <span className="fnt-color font-normal ml-3">(1229)</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap mr-3">
                  <Image
                    src="/blank-rating.svg"
                    alt="Ratings"
                    width="128"
                    height="16"
                  />
                </div>
                <div className="w-100">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
                <span className="fnt-color font-normal ml-3">(171)</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap mr-3">
                  <Image
                    src="/blank-rating.svg"
                    alt="Ratings"
                    width="128"
                    height="16"
                  />
                </div>
                <div className="w-100">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "19%" }}
                    ></div>
                  </div>
                </div>
                <span className="fnt-color font-normal ml-3">(169)</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="text-nowrap mr-3">
                  <Image
                    src="/blank-rating.svg"
                    alt="Ratings"
                    width="128"
                    height="16"
                  />
                </div>
                <div className="w-100">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>
                <span className="fnt-color font-normal ml-3">(112)</span>
              </div>
            </div>
            <div
              className="col-md-4 col-lg-5 text-center flex justify-center gap-1 rounded-lg cc-review-col-last px-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="video-iframe">
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="video-btn"
                      data-toggle="modal"
                      data-target="#MakeModal"
                      data-src="https://www.youtube.com/embed/_b-D9i3Er2w"
                    >
                      <Image
                        className="img-fluid"
                        src="/video1.webp"
                        title="Slim24 Pro"
                        alt="Slim24 Pro Video5"
                        width="183"
                        height="103"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="video-btn"
                      data-toggle="modal"
                      data-target="#MakeModal"
                      data-src="https://www.youtube.com/embed/vz0X-kgqalI"
                    >
                      <Image
                        className="img-fluid"
                        src="/video2.webp"
                        title="Slim24 Pro"
                        alt="Slim24 Pro Video3"
                        width="183"
                        height="103"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="video-btn"
                      data-toggle="modal"
                      data-target="#MakeModal"
                      data-src="https://www.youtube.com/embed/deEntNFlGGI"
                    >
                      <Image
                        className="img-fluid"
                        src="/video3.webp"
                        title="Slim24 Pro"
                        alt="Slim24 Pro Video4"
                        width="183"
                        height="103"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="video-btn"
                      data-toggle="modal"
                      data-target="#MakeModal"
                      data-src="https://www.youtube.com/embed/Ve9S0UNE944"
                    >
                      <Image
                        className="img-fluid"
                        src="/video4.webp"
                        title="Slim24 Pro"
                        alt="Slim24 Pro Video"
                        width="183"
                        height="103"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="video-btn"
                      data-toggle="modal"
                      data-target="#MakeModal"
                      data-src="https://www.youtube.com/embed/_u6Pf9Mw-Lo"
                    >
                      <Image
                        className="img-fluid"
                        src="/video5.webp"
                        title="Slim24 Pro"
                        alt="Slim24 Pro Video1"
                        width="183"
                        height="103"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="video-btn"
                      data-toggle="modal"
                      data-target="#MakeModal"
                      data-src="https://www.youtube.com/embed/hEjQchCGO1s"
                    >
                      <Image
                        className="img-fluid"
                        src="/video6.webp"
                        title="Slim24 Pro"
                        alt="Slim24 Pro Video2"
                        width="183"
                        height="103"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-10">
            <div className="border-black border-b-2">
              <p className="text-black text-2xl bebas">Reviews</p>
            </div>
            <hr className="hr-line mb-md-0" />
          </div>
          <hr className="hr-line-testi mb-md-0" />
          <div className="">
            <div className="flex justify-between items-center w-full"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 pt-md-3">
            <ul className="review-list pt-3">
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Manual Jones
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  I&apos;ve tried few other brand&apos;s meal replacement
                  shakes, but Slim24 Pro is way better than others. It feels
                  like I&apos;m having a normal shake. I found that it helps
                  keep my hunger under control. I usually consume it for
                  breakfast to keep my protein intake in check and it keeps me
                  full for at least 5-6 hours. Reduces my unnecessary cravings
                  too.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Girish Kumar
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  I work out at gym since a long time and was searching protein
                  intake foods like meal shakes. One day unexpectedly I found
                  this amazing product and ordered it. Now I use to drink Slim24
                  Pro daily. It&apos;s worth!! I have already suggested it to my
                  gym-buddies.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Manabir Khan
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4.5-ratings.svg"
                        alt="4.5 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  It does work. I have lost 2 kgs since a month of usage now. I
                  have this in place of my breakfast. I&apos;ve also cut down on
                  sweets and junk food to aid the process. Also try to exercise
                  for about 20 mins a day. Still continuing...
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Sanchita Sarkar
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/5ratings.svg"
                        alt="5 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  It is a part of my daily breakfast routine now. The best part
                  is that I&apos;m noticing changes in my weight with short
                  time... definitely recommend this.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Santosh Kumar Rai
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  It is an effective product. It definitely replaces your meal.
                  I have it in my lunch and this gives me enough energy to keep
                  me going all day long. It doesn&apos;t have any preservatives
                  and harmful chemicals. Must go for it!
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Vishal Gowda
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/5ratings.svg"
                        alt="5 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  I have tried meal replacement once long back, and now wanted
                  to start with a meal replacement again. So, I found Slim24 Pro
                  and thought to give it a try. Received the pack intact.
                  Thought of trying it out for breakfast first. Tried with half
                  glass toned milk n ice cubes as I like it cold. I was
                  surprised to see the consistency. Thick and creamy... taste is
                  also good, though sugar is very low. Will gradually reduce the
                  milk quantity and replace it with dinner or lunch in the
                  coming days. As this was my first day can&apos;t say of how
                  good it works. But I will try this pack and see the difference
                  and will update you all on the same.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Pukhraj Shreshta
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  I have decided to replace it with my evening coffee. It seems
                  a healthy addition to my daily diet and it is completely vegan
                  and made of natural ingredients that makes me trust the
                  quality of ingredients.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Charith Sai
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4.5-ratings.svg"
                        alt="4.5 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  The order was delivered on time, though I had apprehension on
                  the genuineness, but checked and verified. Perfectly delivered
                  on time.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Mallikarjun Rana
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  It&apos;s a good meal replacer. Keep the stomach full, so I
                  don&apos;t have an urge to eat. Taste is also acceptable
                  considering the benefits. Along with Slim24 Pro, I do exercise
                  and have started noticing loss in weight.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Netai Mondal
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  Energy provider... feels full... no need to have anything for
                  long hours after one full glass of meal replacement shake.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Harishankar P
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  I recently tried Slim24 Pro Meal Replacement Shake and I have
                  to say I was pleasantly surprised. The shake has a rich and
                  creamy texture and is delicious. It&apos;s a perfect
                  post-workout drink as it provides a good amount of protein to
                  help recover and repair muscles. It&apos;s also a great option
                  for those on the go as it&apos;s quick and easy to prepare. I
                  highly recommend this product to anyone looking for a tasty
                  and nutritious meal.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Milind Ahuja
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4.5-ratings.svg"
                        alt="4.5 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  Can&apos;t say much because I haven&apos;t used it for long.
                  Will give review once I see any change.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      S. Ram Chandra
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4.5-ratings.svg"
                        alt="4.5 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  I replaced my dinner with a glass of meal replacement shake...
                  it keeps me full and feel lighter at the same time. It also
                  takes care of my protein intake for the day.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Shrirang Pawar
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  My father is bedridden due to stroke post-surgery. Despite
                  being bedridden for last 6 months, he has not gone weak only
                  because of this meal replacement. The product when used had no
                  issues regarding digestion or any negative change in his
                  diabetes status.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Pooja Rajput
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  Works amazing. Lost 1 kg in a week. Taste is awesome. Swap one
                  meal with this and avoid junk and you will see result fast.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Sandeep Singh
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  This meal replacement shake is amazing. This has natural
                  ingredients to help easily lose weight... It controls hunger
                  pangs. Loved it.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Chetan Patil
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  Excellent product... value for money. I feel some more
                  flavours should have been there to opt for.
                </p>
              </li>
              <li
                className="py-3 px-5 mb-5 video-bottom box-border-testi bg-cont"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="">
                  <div className="py-3">
                    <h2 className="text-2xl font-medium pb-2 bebas">
                      Mithilesh Kumar
                      <span className="text-small">
                        Verified
                        <Image
                          src="/verified.svg"
                          width={11}
                          height={11}
                          alt="Verified"
                          className="inline"
                        />
                      </span>
                    </h2>
                    <hr className="new5-testi w-16 mb-3" />
                    <div className="star-review mt-3">
                      <Image
                        src="/4-ratings.svg"
                        alt="4 Ratings"
                        width="112"
                        height="18"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-3 lg:w-full xl:text-1xl  para-color font-medium tracking-normal line-height-slim md:mb-12 text-justify">
                  Good... loved the consistency. Just started using it. Hope it
                  works as claimed by the product.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
