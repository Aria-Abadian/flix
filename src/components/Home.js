import React from "react";
import Featured from "./Featured";
import FilterButtons from "./FilterButtons";
import TrendingAnimation from "./TrendingAnimation";

const Home = () => {
  return (
    <div className="relative z-10 pt-[6.2vw]">
      <Featured />
      <FilterButtons />
      <TrendingAnimation />
    </div>
  );
};

export default Home;
