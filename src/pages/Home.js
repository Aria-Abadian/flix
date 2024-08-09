import React from "react";
import Featured from "../components/Featured";
import FilterButtons from "../components/FilterButtons";
import Trendings from "../components/Trendings";

const Home = () => {
  return (
    <div className="relative z-10 pt-[18vw] md:pt-[6.2vw]">
      <Featured />
      <FilterButtons />
      <Trendings category='Animation' />
      <Trendings category='comedy' />
      <Trendings category='kDrama' />
    </div>
  );
};

export default Home;
