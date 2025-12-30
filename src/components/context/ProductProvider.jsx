import React from "react";
import { ProductContext } from "./ProductContext";
import { productList } from "../../assets/assets";

function ProductProvider({ children }) {
  return (
    <ProductContext.Provider value={productList}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
