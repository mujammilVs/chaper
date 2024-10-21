import React from "react";


import "./Nursery.css";
import { nurseryList } from "../../../assets/assets";

const Nursery = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Nursery</h1>

      <div className="explore-menu-list">
        {nurseryList.map((item, index) => {
          return (
            <div className="explore-menu-list-item" key={index}>
              <img src={item.img} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Nursery;
