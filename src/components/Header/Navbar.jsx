import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search-logo.png";
import leaf from "../../assets/search-leaf.png";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="top">
        <div className="logo-con">
          <img src={logo} alt="Chaperone Logo" />
          <h2>Chaperone</h2>
        </div>
        <ul className="ul-links">
          <li
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            Home
          </li>
          <li>Plants & Plots</li>
          <li>
            <select name="tools" id="tools-select">
              <option value="Tools">Tools</option>
            </select>
          </li>
          <li>
            <select name="services" id="services-select">
              <option value="Our Services">Our Services</option>
            </select>
          </li>
          <li>Blog</li>
          <li>Our Story</li>
          <li>FAQs</li>
        </ul>
        <div className="cart-con">
          <div className="cart">
            <div className="cart-logo">
              <PiUserBold className="icon" />
              <p>Profile</p>
            </div>
          </div>
          <div className="cart">
            <div className="cart-logo">
              <HiOutlineShoppingCart className="icon" />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-search">
          <img src={search} alt="Search" />
          <input type="search" placeholder="Search Plant" />
          <img src={leaf} alt="Leaf" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
