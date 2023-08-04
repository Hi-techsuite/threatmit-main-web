import { Carousel } from "@material-tailwind/react";
import { AnimatePresence } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import SliderButton from "./Buttons/SliderButton";
export function HomeCarousel() {
  const cardVariants = {
    offscreen: {
      scale: 0.6,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
    onscreen: {
      scale: 1,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };
  const childrenVariants = {
    initial_left: {
      x: "-100vh",
      opacity: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
    initial_right: {
      opacity: 0,

      x: "100vh",
    },

    onscreen: {
      // y: 50,
      x: 0,
      opacity: 1,

      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <Carousel
      autoplay={true}
      loop={true}
      className="rounded-none"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-red-300"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <motion.div
        variants={cardVariants}
        whileInView={"onscreen"}
        initial="offscreen"
        viewport={{ amount: 0.1 }}
        className=" bg-[url('https://threatmits.com/asset/pipeline.jpeg')]   bg-cover  "
      >
        <section
          // data-aos="zoom-in"
          className="min-h-[70vh] md:min-h-[100vh] relative flex flex-col gap-3 items-center justify-center  w-full h-full  content-[''] top-0 left-0  bg-gradient-to-r from-[#330d70]/30  to-[#f48005]/10   "
        >
          <motion.div className=" flex  gap-3  flex-col md:bottom-50  md:left-10 items-start  absolute">
            <motion.p
              // variants={childrenVariants}
              initial="initial_left"
              whileInView={"onscreen"}
              className=" text-gray-200 font-light text-2xl md:text-5xl flex flex-col  "
            >
              we deliver on
            </motion.p>
            <motion.p
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
            </motion.p>

            <SliderButton href={"#"} />
          </motion.div>
        </section>
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileInView={"onscreen"}
        initial="offscreen"
        viewport={{ amount: 0.1 }}
        className=" bg-[url('https://threatmits.com/asset/cctiv.jpeg')]   bg-cover  "
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

      <motion.div
        variants={cardVariants}
        whileInView={"onscreen"}
        initial="offscreen"
        viewport={{ amount: 0.1 }}
        className=" bg-[url('https://threatmits.com/asset/access-control.jpeg')]   bg-cover   bg-center"
      >
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
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileInView={"onscreen"}
        initial="offscreen"
        viewport={{ amount: 0.1 }}
        className=" bg-[url('https://threatmits.com/asset/car-repair.jpeg')]   bg-cover   bg-center"
      >
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
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileInView={"onscreen"}
        initial="offscreen"
        viewport={{ amount: 0.1 }}
        className=" bg-[url('https://threatmits.com/asset/maritime.jpeg')]   bg-cover   bg-center"
      >
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
              We provide world class maritime security services that exceed best
              industry practices...
            </p>
            <div>
              <SliderButton href={"/ "} />
            </div>
          </div>
        </section>
      </motion.div>
    </Carousel>
  );
}
