"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const VideoCaro = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="p-md-4 p-3 text-center">
          <video className="video-bottom" controls autoPlay loop muted>
            <source src="/video1.mp4" />
          </video>
        </div>
        <div className="p-md-4 p-3 text-center">
          <video className="video-bottom" controls autoPlay loop muted>
            <source src="/video2.mp4" />
          </video>
        </div>
        <div className="p-md-4 p-3 text-center">
          <video className="video-bottom" controls autoPlay loop muted>
            <source src="/video3.mp4" />
          </video>
        </div>
      </Slider>
    </div>
  );
};

export default VideoCaro;
