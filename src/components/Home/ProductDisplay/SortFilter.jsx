import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./SortFilter.css"; 

// eslint-disable-next-line react/prop-types
const SortFilter = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    onSortChange(value);
  };

  return (
    <div className="sort-filter">
      <button className="sort-button" onClick={toggleDropdown}>
        SORT BY {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
      {isOpen && (
        <div className="dropdown">
              <hr style={{marginBottom:'5px'}}/>
          <label>
            <input
              type="checkbox"
              name="sort"
              value="size"
              onChange={handleSortChange}
            />
          
            Size
          </label>
          <label>
            <input
              type="checkbox"
              name="sort"
              value="popularity"
              onChange={handleSortChange}
            />
            Popularity
          </label>
          <label>
            <input
              type="checkbox"
              name="sort"
              value="priceLowHigh"
              onChange={handleSortChange}
            />
            Price, Low-High
          </label>
          <label>
            <input
              type="checkbox"
              name="sort"
              value="priceHighLow"
              onChange={handleSortChange}
            />
            Price, High-Low
          </label>
        </div>
      )}
    </div>
  );
};

export default SortFilter;
