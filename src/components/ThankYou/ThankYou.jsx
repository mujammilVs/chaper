// import {useContext} from "react";
// import bg from "../../assets/bg.webp";
// import { StoreContext } from "../../context/StoreContext";
// const ThankYou = () => {
//   const { cartItems, productsData, } =
//     useContext(StoreContext);
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//       }}
//     >
//       <div>
//         {productsData.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div key={index}>
//                 <h2>{item.name}</h2>
//                 <p>{item.desc}</p>
//                 <img src={item.img} alt="" />
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// export default ThankYou;



import { useLocation } from "react-router-dom";
import bg from "../../assets/bg.webp";

const ThankYou = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Access the product passed via state

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        {product ? (
          <div style={{display:'flex', flexDirection:'column',alignItems:'center', border:'2px solid #043512', padding:'10px', gap:'5px',}}>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <img src={product.image} alt={product.name} />
            <button>Add</button>
          </div>
        ) : (
          <h2>No product selected</h2>
        )}
      </div>
    </div>
  );
};

export default ThankYou;
