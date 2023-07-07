import React from "react";
import AnimatedNumber from "react-animated-numbers";

const InfoCounter = () => {
  return (
    <div className="flex md:gap-3 md:justify-around py-10 flex-col gap-10 md:flex-row justify-center items-center  ">
      <div className="relative md:h-[200px] ">
        <p className="md:text-8xl w-full font-extrabold text-[#efefef] text-8xl ">
          <AnimatedNumber
            animateToNumber={"90"}
            locale="en-US"
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
              { mass: 1, tension: 180, friction: 135 },
              { mass: 1, tension: 260, friction: 100 },
              { mass: 1, tension: 210, friction: 180 },
            ]}
          />
        </p>
        <div className="absolute top-10 left-10 right-1 font-bold">
          <p>Offices</p>
        </div>
      </div>
      <div className="relative md:h-[200px]">
        <p className="text-8xl font-extrabold text-[#efefef]">
          <AnimatedNumber
            className="text-8xl font-extrabold text-[#efefef]"
            animateToNumber={"200"}
            // fontStyle={{ fontSize: 40 }}
            locale="en-US"
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
              { mass: 1, tension: 180, friction: 135 },
              { mass: 1, tension: 260, friction: 100 },
              { mass: 1, tension: 210, friction: 180 },
            ]}
          />
        </p>
        <div className="absolute top-10 left-10 right-1 font-bold">
          <p>Security Officers</p>
        </div>
      </div>
      <div className="relative h-[200px]">
        <p className="text-8xl font-extrabold text-[#efefef]">
          <AnimatedNumber
            className="text-8xl font-extrabold text-[#efefef]"
            animateToNumber={"1000"}
            // fontStyle={{ fontSize: 40 }}
            locale="en-US"
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
              { mass: 1, tension: 180, friction: 135 },
              { mass: 1, tension: 260, friction: 100 },
              { mass: 1, tension: 210, friction: 180 },
            ]}
          />
        </p>
        <div className="absolute top-10 left-10 right-1 font-bold">
          <p>Lives Secured</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCounter;
