import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="bg-parent">
        <div className="child">
          <p >Free Shipping on order above 900</p>
          <p>Call us on : +91 9876805120</p>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
