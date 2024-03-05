import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal:₹ {totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/cart");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

// import React, { useContext } from "react";
// import { ShopContext } from "../../context/shop-context";
// import { PRODUCTS } from "../../products";
// import { CartItem } from "./cart-item";
// import { useNavigate } from "react-router-dom";

// import "./cart.css";

// export const Cart = () => {
//   const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
//   const totalAmount = getTotalCartAmount();

//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     checkout();
//     navigate("/cart");
//   };

//   return (
//     <div className="cart">
//       <div>
//         <h1>Your Cart Items</h1>
//       </div>
//       <div className="cart">
//         {PRODUCTS.map((product) => {
//           const quantity = cartItems[product.id];
//           if (quantity > 0) {
//             return <CartItem key={product.id} data={product} />;
//           }
//           return null;
//         })}
//       </div>

//       {totalAmount > 0 ? (
//         <div className="checkout">
//           <p> Subtotal: ₹ {totalAmount} </p>
//           <button onClick={() => navigate("/")}> Continue Shopping </button>
//           <button onClick={handleCheckout}> Checkout </button>
//         </div>
//       ) : (
//         <h1>Your Shopping Cart is Empty</h1>
//       )}
//     </div>
//   );
// };
