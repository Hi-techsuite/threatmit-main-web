import React from "react";
import OurValuesModel from "./view-models/our-values-model";

const OurValues = () => {
  return (
    <div>
      <p>
        Our <span>Values</span>
      </p>
      <div>
        <OurValuesModel />
        <OurValuesModel />
        <OurValuesModel />
        <OurValuesModel />
        <OurValuesModel />
        <OurValuesModel />
      </div>
    </div>
  );
};

export default OurValues;
