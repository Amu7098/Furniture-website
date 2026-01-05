import React, { useState } from "react";
import { ProductContext } from "./ProductContext";
import { productList } from "../../assets/assets";
import item from "../Product";

function ProductProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (item_id) => {
    if (!cartItems[item_id]) {
      setCartItems((prev) => ({ ...prev, [item_id]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [item_id]: prev[item_id] + 1 }));
    }
  };

  const removeFromCart = (item_id) => {
    setCartItems((prev) => ({ ...prev, [item_id]: prev[item_id] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        let iteminfo = productList.find((product) => product.id == items);
        totalAmount = totalAmount + iteminfo.price * cartItems[items];
      }
    }
    return totalAmount;
  };

  const ContextValue = {
    productList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount
  };
  return (
    <ProductContext.Provider value={ContextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
