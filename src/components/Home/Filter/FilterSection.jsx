import React, { useState } from "react";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { HiMiniPlusSmall } from "react-icons/hi2";
import "./FilterSection.css"; // Import the CSS file

const FilterSection = () => {
  // Initial filter data
  const filterData = [
    {
      category: "Type of Plants",
      options: [
        "Lorem Ipsum (12)",
        "Lorem Ipsum (23)",
        "Lorem Ipsum (41)",
        "Lorem Ipsum (9)",
        "Lorem Ipsum (15)",
      ],
    },
    {
      category: "Price",
      options: ["Low", "Medium", "High"],
    },
    {
      category: "Nursery",
      options: ["Nursery 1", "Nursery 2", "Nursery 3"],
    },
    {
      category: "Ideal Plants Location",
      options: ["Indoor", "Outdoor"],
    },
    {
      category: "Indoor/ Outdoor",
      options: ["Indoor", "Outdoor"],
    },
    {
      category: "Maintenance",
      options: ["Low", "Medium", "High"],
    },
    {
      category: "Plant Size",
      options: ["Low", "Medium", "High"],
    },
    {
      category: "Water Schedule",
      options: ["Low", "Medium", "High"],
    },

    {
      category: "Color",
      options: ["LightGreen", "thickGreen", "Green"],
    },
    {
      category: "Seasonal",
      options: ["Low", "Medium", "High"],
    },
    {
      category: "Light Efficient",
      options: ["Low", "Medium", "High"],
    },
  ];

  // State to manage visibility for each category
  const [expandedSections, setExpandedSections] = useState({});

  // Handle section toggling
  const handleToggleSection = (category) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  // Handle "Clear All" functionality
  const handleClearAll = () => {
    setExpandedSections({});
  };

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h2>Filter</h2>
        <span className="clear-all" onClick={handleClearAll}>
          CLEAR ALL
        </span>
      </div>
      <hr className="filter-separator" />

      {/* Loop over filter data to create sections */}
      {filterData.map((filter, index) => (
        <div key={index}>
          <div
            onClick={() => handleToggleSection(filter.category)}
            className="filter-category"
          >
            <h3 className="labels">{filter.category}</h3>
            <span>
              {expandedSections[filter.category] ? (
                <HiMiniMinusSmall />
              ) : (
                <HiMiniPlusSmall />
              )}
            </span>
          </div>
          {expandedSections[filter.category] && (
            <ul className="filter-options">
              {filter.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <i className="labels">
                    <input type="checkbox" /> {option}
                  </i>
                </li>
              ))}
            </ul>
          )}
          <hr className="filter-separator" />
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
