import React, { useState } from "react";
import ProductCard from "../../ProductCard/ProductCard";
import FilterSection from "../Filter/FilterSection";
import "./ProductDisplay.css";
import SortFilter from "./SortFilter";

const ProductDisplay = () => {
  return (
    <div className="container">
      <div className="section">
        <FilterSection />
        <div className="right">
          <div className="sort-filter">
            <span>300 Products</span>
            <SortFilter />
          </div>

          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
