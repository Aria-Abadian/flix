import React from "react";
import Featured from "./Featured";
import FilterButtons from "./FilterButtons";
import Trendings from "./Trendings";

const Home = () => {
  return (
    <div className="relative z-10 pt-[18vw] md:pt-[6.2vw]">
      <Featured />
      <FilterButtons />
      <Trendings category='Animation' />
      <Trendings category='Comedy' />
      <Trendings category='K-drama' />
    </div>
  );
};

export default Home;
