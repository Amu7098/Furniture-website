import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";

function Product() {
  const ProductLists = useContext(ProductContext);
  return (
   
    <div className="container-fluid">
      <div className="row">
        {ProductLists.map((product) => (
          <div className="col-md-3 mt-5" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="product-img"
                alt={product.name}
              />

              <div className="card-body">
                <h6 className="card-title">{product.product}</h6>

                <h6 className="text-success">₹{product.price}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
