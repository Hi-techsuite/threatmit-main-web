import React from "react";
import security from "../../assets/images/our-services/security.jpeg";

const OurServicesModel = ({ image, title, description, href, position }) => {
  let finalImage = image;

  if (!image.includes("https://")) {
    finalImage = import("../../assets/images/our-services/security.jpeg");
  }
  return (
    <div className="flex flex-col gap-4  my-5 md:px-0 px-7 ">
      <img
        src={image || security}
        alt={title}
        className={`  ${
          position ||
          "object-top md:min-h-[200px] min-h-[250px] md:max-h-[200px] object-cover max-h-[250px]"
        }`}
      />
      <div className="w-3/4   py-4 gap-5 flex flex-col">
        <p className="text-xl font-semibold text-[#575757]">
          {title || "title"}
        </p>
        <p className="font-light">{description || "description"}</p>
      </div>

      <div className="text-center py-5">
        <button className="bg-transparent hover:bg-transparent btn btm-nav-md uppercase font-medium">
          Read more
        </button>
      </div>
    </div>
  );
};

export default OurServicesModel;
