import React from "react";
import Town from "../City/Town";
import "../City/City.css";
import CityItinerary from "../City/CityItinerary";
import File1 from "./File1";


function City() {
  return (
    <div className="city">

      <Town />
      <CityItinerary />
       <File1/>



    </div>
  );
};
export default City;