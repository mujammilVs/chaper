import React, { useState } from "react";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { productsData } from "../../assets/assets";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({}) => {
  const navigate = useNavigate();
  const initialVisibleCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
    setVisibleCount(showMore ? initialVisibleCount : productsData.length);
  };

  return (
    <div className="productcard-div">
      <div className="cards-div">
        {productsData.slice(0, visibleCount).map((item, index) => (
          <div className="plantcard" key={index}>
            <div className="card">
              <img src={item.image} alt={item.name} />
              <button
                onClick={() => {
                  // Pass product information to the ThankYou component
                  navigate("/thankyou", { state: { product: item } });
                }}
                className="card-view-button"
              >
                View Product
              </button>
            </div>

            <div className="card-details">
              <h3>{item.name}</h3>
              <h4>{item.desc}</h4>
              <div className="stars">
                {item.stars.map((each, index) => (
                  <div className="starss" key={index}>
                    <img src={each} alt="" style={{ width: "8px" }} />
                  </div>
                ))}
                <i>4.9</i>
              </div>
              <div className="card-price">
                <i className="original">₹ {item.slashprice}</i>
                <i className="price">₹ {item.price}</i>
              </div>
              <div className="button">
                <button
                  className="add"
                  onClick={() => {
                    navigate("/addtocartmodal", { state: { product: item } });
                  }}
                >
                  <span>
                    <HiMiniMinusSmall />
                  </span>
                  Add to cart
                  <span>
                    <HiMiniPlusSmall />
                  </span>
                </button>
                <button className="buttonbuy">Buy or Rent</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="view-more-button" onClick={handleToggle}>
        {showMore ? "View Less" : "View More"}
      </button>
    </div>
  );
};

export default ProductCard;
