import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  EffectFade,
} from "swiper/modules";
const SlickCarousel = () => {
  return (
    <div>
      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y, Scrollbar, EffectCube]}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className=" bg-[url('https://threatmits.com/assets/pipeline.jpeg')]   bg-cover  ">
            <section
              // data-aos="zoom-in"
              className="min-h-[70vh] md:min-h-[100vh] relative flex flex-col gap-3 items-center justify-center  w-full h-full  content-[''] top-0 left-0  bg-gradient-to-r from-[#330d70]/30  to-[#f48005]/10   "
            >
              <div className=" flex  gap-3  flex-col bottom-20  left-10  justify-start   absolute">
                <p className="text-2xl text-gray-300 font-light ">
                  we deliver on
                </p>
                <p
                  // data-aos="fade-right"
                  className="font-light text-white  md:text-5xl flex flex-col  text-2xl "
                >
                  <span className="font-bold">Assets </span> and critical
                  infrastructure <span className="font-black"> protection</span>
                </p>

                <Link
                  to={"/online"}
                  className="btn normal w-2/4  bg-[#F48006]  text-white border-none font-bold  rounded-sm flex  flex-row gap-3"
                >
                  more information
                </Link>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url('https://threatmits.com/assets/cctiv.jpeg')]   bg-cover  ">
            <section
              // data-aos="zoom-in"
              className="min-h-[70vh] md:min-h-[100vh] relative flex flex-col gap-3 items-center justify-center  w-full h-full  content-[''] top-0 left-0  bg-gradient-to-r from-[#330d70]/30  to-[#f48005]/10   "
            >
              <div className=" flex  gap-3  flex-col      justify-start   absolute">
                <p className="text-4xl text-gray-300 font-extralight">
                  with our
                </p>
                <p
                  // data-aos="fade-right"
                  className="font-medium text-white  md:text-6xl flex flex-col  text-4xl w-2/4  "
                >
                  Intelligently coordinated coverage, nothing is out of sight
                </p>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url('https://threatmits.com/assets/access-control.jpeg')]   bg-cover   bg-center">
            <section
              // data-aos="zoom-in"
              className="min-h-[70vh] md:min-h-[100vh] relative   bg-gradient-to-r from-[#330d70]/50  to-[#f48005]/30   "
            >
              <div
                className="   items-center   bottom-10 right-10  absolute w-2/5 px-3 py-5
               "
              >
                <p className="text-2xl  font-extralight bg-black text-white px-2 w-fit">
                  ACCESS CONTROL SYSTEM
                </p>
                <p
                  // data-aos="fade-right"
                  className=" text-white font-light  md:text-3xl flex flex-col    "
                >
                  You can trust us with your ACCESS CONTROL SYSTEM
                </p>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url('https://threatmits.com/assets/car-repair.jpeg')]   bg-cover   bg-center">
            <section
              // data-aos="zoom-in"
              className="min-h-[70vh] md:min-h-[100vh] relative   bg-gradient-to-l from-[#330d70]/30  to-[#f48005]/10   "
            >
              <div
                className="   items-center   bottom-10 right-10  absolute w-2/5 px-3 py-5
               "
              >
                <p className="text-2xl  font-extralight  text-white px-2 w-fit">
                  Car Repair
                </p>
                <p
                  // data-aos="fade-right"
                  className=" text-white font-light  md:text-3xl flex flex-col    "
                >
                  {/* You can trust us with your ACCESS CONTROL SYSTEM */}
                </p>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url('https://threatmits.com/assets/maritime.jpeg')]   bg-cover   bg-center">
            <section
              // data-aos="zoom-in"
              className="min-h-[70vh] md:min-h-[100vh] relative   bg-gradient-to-r from-[#330d70]/50  to-[#f48005]/30   "
            >
              <div
                className="    items-center  transform  translate-x-[-50%] translate-y-[-50%] top-[50%]  left-[50%]  absolute  px-3 py-5
               "
              >
                <p className="text-2xl  font-bold  text-white px-2 w-fit">
                  MARITIME SECURITY
                </p>
                <p
                  // data-aos="fade-right"
                  className=" text-white font-light  md:text-3xl flex flex-col    "
                ></p>
              </div>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SlickCarousel;
