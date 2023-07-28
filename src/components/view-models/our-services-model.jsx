import React, { useState } from "react";
import security from "../../assets/images/our-services/security.jpeg";
import Modal1 from "../Modal/Modal1";
import GetInTouch2 from "../GetInTouch2";

const OurServicesModel = ({ image, title, description, href, position }) => {
  const [modal, setModal] = useState(false);
  let finalImage = image;

  if (!image.includes("https://")) {
    finalImage = import("../../assets/images/our-services/security.jpeg");
  }
  return (
    <div
      className={`flex   relative flex-col gap-4  my-5 md:px-0 px-7 h-[400px] w-full bg-black/50 group  bg-blend-saturation hover:bg-blend-normal bg-[url(${image})] scale-95 md:hover:scale-105 duration-300  hover:mx-0 hover:rounded-md hover:z-50 transition-all`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <img
        src={image || security}
        alt={title}
        className={` md:object-cover  md:h-full h-[100vh] w-[100vw] hidden  `}
      /> */}

      <div className="  absolute bottom-1 left-0 px-2 flex flex-col  justify-start w-full   group-hover:bg-[#330d70]/40  py-3">
        <p className=" group-hover:font-bold ease-in-out transition-all text-white">
          {title}
        </p>
        <p className="font-light text-white ">{description}</p>
      </div>

      <div className=" backdrop-blur-sm w-full h-full bg-opacity-50 bg-[#330d70] absolute hidden   top-0 bottom-0 left-0 flex-col  gap-3 py-5 px-3 mx-0  justify-center items-center">
        <p className="font-black text-white text-center">{title}</p>
        <p className="font-light text-white px-4 text-center">{description}</p>

        <button
          onClick={() => setModal(true)}
          className="bg-[#f48005]  px-5 py-2  rounded-full text-white"
        >
          Get in Touch
        </button>
      </div>

      <Modal1 visible={modal} onClose={() => setModal(false)}>
        <div className="">
          <GetInTouch2 />
        </div>
      </Modal1>
    </div>
  );
};

export default OurServicesModel;
