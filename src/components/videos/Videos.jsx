import VideoCaro from "@/components/videos/VideoCaro";
const Videos = () => {
  return (
    <section id="videos" className="py-10">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-12 py-5 hidden md:block">
            <div className="flex justify-left md:justify-center">
              <h2
                className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase aos-init aos-animate"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                POSITIVE RESULTS
              </h2>
            </div>
            <div className="flex justify-start md:justify-center">
              <hr className="new5 w-1/6 flex justify-center md:justify-center" />
            </div>
          </div>
          <div className="col-md-12 py-5 block md:hidden">
            <div className="flex justify-center">
              <h2
                className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase aos-init aos-animate"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                POSITIVE RESULTS
              </h2>
            </div>
            <div className="flex justify-center">
              <hr className="new5 w-1/6 flex justify-center items-center" />
            </div>
          </div>
        </div>
        <VideoCaro />
      </div>
    </section>
  );
};

export default Videos;
