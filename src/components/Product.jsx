import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

function Item() {
  const { productList, cartItems, addToCart, removeFromCart } =
    useContext(ProductContext);

  return (
    <div className="container-fluid mt-4 px-4">
      <div className="row">
        {productList.map((item) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm border-0 hover-scale">
              {/* Product Image */}
              <img
                src={item.image}
                className="card-img-top"
                alt={item.product}
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column justify-content-between">
                {/* Product Name & Price */}
                <div>
                  <h6 className="card-title fw-bold">{item.product}</h6>
                  <p className="text-success fw-bold mb-3">₹{item.price}</p>
                </div>

                {/* Add to Cart / Quantity Control */}
                {!cartItems[item.id] ? (
                  <button
                    className="btn btn-dark w-100 fw-bold"
                    onClick={() => addToCart(item.id)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="d-flex align-items-center justify-content-center">
                    <FaMinusCircle
                      className="text-danger fs-4"
                      style={{ cursor: "pointer" }}
                      onClick={() => removeFromCart(item.id)}
                    />
                    <span className="fw-bold mx-3 fs-5">
                      {cartItems[item.id]}
                    </span>
                    <FaPlusCircle
                      className="text-success fs-4"
                      style={{ cursor: "pointer" }}
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

export default Item;
