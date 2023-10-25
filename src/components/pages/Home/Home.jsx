import React from "react";
import Area from "./Area/Area";
import Attractions from "./Attractions/Attractions";
import Bishkek from "./Bishkek/Bishkek";
import Culture from "./Culture/Culture";
import HomeHero from "./HomeHero/HomeHero";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Bishkek />
      <Attractions />
      <Culture />
      <Area />
    </div>
  );
};

export default Home;
