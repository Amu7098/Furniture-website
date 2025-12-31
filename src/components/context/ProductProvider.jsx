import React, { useState } from "react";
import { ProductContext } from "./ProductContext";
import { productList } from "../../assets/assets";

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

  const ContextValue = {
    productList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ProductContext.Provider value={ContextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
