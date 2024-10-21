import React from "react";
import PlantsAndPots from "./PlantAndPots/PlantsAndPots";
import Nursery from "./Nursery/Nursery";
import ProductDisplay from "./ProductDisplay/ProductDisplay";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PlantsAndPots />
      <Nursery />

      <ProductDisplay />
    </div>
  );
};

export default Home;
