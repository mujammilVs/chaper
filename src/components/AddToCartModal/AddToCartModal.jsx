// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import img from "../../assets/modalplantimg.png";


// import "./AddToCartModal.css";

// const AddToCartModal = ({ setShowModal }) => {
 
//   return (
//     <div className="login-popup">
//       <div className="login-popup-container">
//         <div className="cross">
//           <RxCross2 onClick={() => setShowModal(false)} />
//         </div>

//         <div className="title">
//           <h1>Your Cart</h1>
//           <hr />
//         </div>
//         <div className="head">
            
//           <h2>
//             Congratulations
//             <br />
//             Order Placed!
//           </h2>
//           <img src={img} alt="img" />
//           <p>
//             Thank You for choosing Chaperone services. We will soon get in touch
//             with you!
//           </p>
//           <button>CONTINUE SHOPPING</button>
        
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCartModal;



import { useLocation, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import "./AddToCartModal.css";

const AddToCartModal = ({ setShowModal }) => {
  const location = useLocation();
  const { product } = location.state || {};
  const navigate = useNavigate();

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="cross">
          <RxCross2 onClick={() => setShowModal(false)} />
        </div>

        <div className="title">
          <h1>Your Cart</h1>
          <hr />
        </div>
        <div className="head">
          {product ? (
            <>
            <div className="productname">
              <h2>
                 Congratulations! your order is placed.
              </h2>
              </div>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
            </>
          ) : (
            <h2>No product selected</h2>
          )}
          <button onClick={() => navigate("/")}>CONTINUE SHOPPING</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;




