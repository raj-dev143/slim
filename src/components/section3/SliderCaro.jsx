"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const SliderCaro = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        <div>
          <div className="card flex justify-center py-5 rounded-[25px] mx-[15px] shadow mb-3.5 hover:bg-[#406213] hover:text-white transition-all">
            <div className="flex justify-center">
              <Image
                className="img-fluid w-20 h-20"
                alt="Reduced risk of diabetes"
                title="Reduced risk of diabetes"
                src="/icon1.png"
                width="80"
                height="80"
              />
            </div>
            <div className="card-body flex justify-center mt-3">
              <h2 className="text-center text-[21px]">
                Reduced risk of diabetes
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card flex justify-center py-5 rounded-[25px] mx-[15px] shadow mb-3.5 hover:bg-[#406213] hover:text-white transition-all">
            <div className="flex justify-center">
              <Image
                className="img-fluid w-20 h-20"
                alt="Lower risk of heart disease"
                title="Lower risk of heart disease"
                src="/icon2.png"
                width="80"
                height="80"
              />
            </div>
            <div className="card-body flex justify-center mt-3">
              <h2 className="text-center text-[21px]">
                Lower risk of heart disease
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card flex justify-center py-5 rounded-[25px] mx-[15px] shadow mb-3.5 hover:bg-[#406213] hover:text-white transition-all">
            <div className="flex justify-center">
              <Image
                className="img-fluid w-20 h-20"
                alt="Lower risk of stroke"
                title="Lower risk of stroke"
                src="/icon3.png"
                width="80"
                height="80"
              />
            </div>
            <div className="card-body flex justify-center mt-3">
              <h2 className="text-center text-[21px]">Lower risk of stroke</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card flex justify-center py-5 rounded-[25px] mx-[15px] shadow mb-3.5 hover:bg-[#406213] hover:text-white transition-all">
            <div className="flex justify-center">
              <Image
                className="img-fluid w-20 h-20"
                alt="Improved Blood Sugar"
                title="Improved Blood Sugar"
                src="/icon4.png"
                width="80"
                height="80"
              />
            </div>
            <div className="card-body flex justify-center mt-3">
              <h2 className="text-center text-[21px]">Improved Blood Sugar</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card flex justify-center py-5 rounded-[25px] mx-[15px] shadow mb-3.5 hover:bg-[#406213] hover:text-white transition-all">
            <div className="flex justify-center">
              <Image
                className="img-fluid w-20 h-20"
                alt="Improved cholesterol"
                title="Improved cholesterol"
                src="/icon5.png"
                width="80"
                height="80"
              />
            </div>
            <div className="card-body flex justify-center mt-3">
              <h2 className="text-center text-[21px]">Improved cholesterol</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card flex justify-center py-5 rounded-[25px] mx-[15px] shadow mb-3.5 hover:bg-[#406213] hover:text-white transition-all">
            <div className="flex justify-center">
              <Image
                className="img-fluid w-20 h-20"
                alt="Lower joint aches"
                title="Lower joint aches"
                src="/icon6.png"
                width="80"
                height="80"
              />
            </div>
            <div className="card-body flex justify-center mt-3">
              <h2 className="text-center text-[21px]">Lower joint aches</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card flex justify-center py-5 rounded-[25px] mx-[15px] shadow mb-3.5 hover:bg-[#406213] hover:text-white transition-all">
            <div className="flex justify-center">
              <Image
                className="img-fluid w-20 h-20"
                alt="Improved sleep with reduced sleep apnea"
                title="Improved sleep with reduced sleep apnea"
                src="/icon7.png"
                width="80"
                height="80"
              />
            </div>
            <div className="card-body flex justify-center mt-3">
              <h2 className="text-center text-[21px]">
                Improved sleep with reduced sleep apnea
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderCaro;
