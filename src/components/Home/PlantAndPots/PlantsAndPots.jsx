import React, { useState } from "react";
import "./PlantsAndPots.css";

const PlantsAndPots = () => {
  const [selectedButton, setSelectedButton] = useState(""); // State to track which button is clicked

  return (
    <div className="container">
      <div className="buttons">
        <button>Plants</button>
        <button className="plots">Pots</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur.
      </p>
      
    </div>
  );
};

export default PlantsAndPots;
