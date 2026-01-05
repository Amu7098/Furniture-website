import { useContext, useState } from "react";
import { ProductContext } from "./context/ProductContext";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

function item() {
  const { productList, cartItems, addToCart, removeFromCart } =
    useContext(ProductContext);
  const acvCart = useState(false);
  return (
    <div className="container-fluid">
      <div className="row">
        {productList.map((item) => (
          <div className="col-md-3 mt-5" key={item.id}>
            <div className="card  h-100 shadow-sm border-0">
              <img src={item.image} className="card-img-top" alt={item.name} />

              <div className="card-body">
                <h6 className="card-title fw-bold">{item.product}</h6>
                <p className="text-success fw-bold">₹{item.price}</p>
                {!cartItems[item.id] ? (
                  <button
                    className="btn btn-dark"
                    onClick={() => addToCart(item.id)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div>
                    <FaMinusCircle
                      className="text-danger fs-1 ms-3"
                      onClick={() => removeFromCart(item.id)}
                    />
                    <span className="fw-bold mx-4">{cartItems[item.id]}</span>
                    <FaPlusCircle
                      className="text-success fs-1 ms-3"
                      onClick={() => addToCart(item.id)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default item;
