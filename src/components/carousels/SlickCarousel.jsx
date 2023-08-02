import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "framer-motion";
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
import SliderButton from "../Buttons/SliderButton";
import { useState } from "react";
const SlickCarousel = () => {
  const [direction, setDirection] = useState(null);
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div>
      <Swiper
        // spaceBetween={50}

        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y, Scrollbar, EffectCube]}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <AnimatePresence>
            <motion.div
              variants={slideVariants}
              initial={"handleRight"}
              animate={"visible"}
              exit={"exit"}
              className=" bg-[url('https://threatmits.com/assets/pipeline.jpeg')]   bg-cover  "
            >
              <section
                // data-aos="zoom-in"
                className="min-h-[70vh] md:min-h-[100vh] relative flex flex-col gap-3 items-center justify-center  w-full h-full  content-[''] top-0 left-0  bg-gradient-to-r from-[#330d70]/30  to-[#f48005]/10   "
              >
                <div className=" flex  gap-3  flex-col md:bottom-50  md:left-10 items-start  absolute">
                  <p className=" text-gray-200 font-light text-2xl md:text-5xl flex flex-col  ">
                    we deliver on
                  </p>
                  <p
                    // data-aos="fade-right"
                    className="font-light text-white  md:text-5xl flex flex-col  text-2xl md:text-start text-start"
                  >
                    <span className="font-bold">
                      Assets <span className="font-light">and</span>{" "}
                    </span>
                    <span className="font-black">
                      {" "}
                      Critical infrastructure protection
                    </span>
                  </p>

                  <SliderButton href={"#"} />
                </div>
              </section>
            </motion.div>
          </AnimatePresence>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{
              x: 100,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className=" bg-[url('https://threatmits.com/assets/cctiv.jpeg')]   bg-cover  "
          >
            <section
              // data-aos="zoom-in"
              className="min-h-[70vh] md:min-h-[100vh] relative flex flex-col gap-3 items-center justify-center  w-full h-full  content-[''] top-0 left-0  bg-gradient-to-r from-[#330d70]/30  to-[#f48005]/10   "
            >
              <div className=" flex  gap-3  flex-col      justify-start  px-3   absolute">
                <p className="text-4xl text-gray-300 font-semibold">with our</p>
                <p
                  // data-aos="fade-right"
                  className="font-medium text-white  md:text-6xl flex flex-col  text-3xl w-2/4  "
                >
                  Intelligently coordinated coverage, nothing is out of sight
                </p>

                <SliderButton href={"#"} />
              </div>
            </section>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url('https://threatmits.com/assets/access-control.jpeg')]   bg-cover   bg-center">
            <section
              // data-aos="zoom-in"
              className="min-h-[70vh] md:min-h-[100vh] relative flex flex-col gap-3 items-start justify-center  w-full h-full  content-[''] top-0 left-0  bg-gradient-to-r from-[#330d70]/30  to-[#f48005]/10   "
            >
              <div className=" flex  gap-3  flex-col      justify-start  px-10   absolute">
                <p className="text-4xl text-gray-300 font-semibold">
                  you can trust us with your
                </p>
                <p
                  // data-aos="fade-right"
                  className="font-medium text-white  md:text-6xl flex flex-col  text-3xl w-full  "
                >
                  Access Control System
                </p>
                <SliderButton href={"#"} />
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url('https://threatmits.com/assets/car-repair.jpeg')]   bg-cover   bg-center">
            <section
              // data-aos="zoom-in"
              className="min-h-[70vh] md:min-h-[100vh] relative flex flex-col gap-3 items-center justify-center  w-full h-full  content-[''] top-0 left-0  bg-gradient-to-r from-[#330d70]/30  to-[#f48005]/10   "
            >
              <div className=" flex  gap-3  flex-col md:bottom-50  md:left-10  md:justify-start justify-center items-start   absolute">
                <p className=" text-gray-200 font-light text-xl md:text-5xl  ">
                  We guarantee excellent delivery on
                </p>
                <p
                  // data-aos="fade-right"
                  className="font-light text-white  md:text-5xl flex flex-col  text-2xl md:text-start "
                >
                  <span className="font-black">
                    {" "}
                    Auto Mobile Repairs/Maintenance
                  </span>
                </p>

                <SliderButton href={"/ "} />
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url('https://threatmits.com/assets/maritime.jpeg')]   bg-cover   bg-center">
            <section
              // data-aos="zoom-in"
              className="min-h-[70vh] md:min-h-[100vh] relative flex flex-col gap-3 items-center justify-center  w-full h-full  content-[''] top-0 left-0  bg-gradient-to-r from-[#330d70]/30  to-[#f48005]/10   "
            >
              <div className=" flex  gap-3  flex-col      justify-start  px-3   absolute">
                <p className="text-4xl text-gray-300 font-semibold">
                  Maritime/Offshore Security
                </p>
                <p
                  // data-aos="fade-right"
                  className="font-medium text-white  md:text-3xl flex flex-col  text-xl  md:w-2/4 "
                >
                  We provide world class maritime security services that exceed
                  best industry practices...
                </p>
                <div>
                  <SliderButton href={"/ "} />
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SlickCarousel;
