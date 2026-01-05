import { useContext } from "react";
import { ProductContext } from "../components/context/ProductContext";
import { FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, productList, removeFromCart, getTotalAmount } =
    useContext(ProductContext);

  const navigate = useNavigate();

  return (
    <div className="container-fluid mt-4 px-4">
      {/* Responsive Table Wrapper */}
      <div className="table-responsive">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Items</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {productList.map((item) => {
              if (cartItems[item.id] > 0) {
                return (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.product}
                        className="image-cart"
                      />
                    </td>
                    <td>{item.product}</td>
                    <td>₹{item.price}</td>
                    <td>{cartItems[item.id]}</td>
                    <td>₹{item.price * cartItems[item.id]}</td>
                    <td>
                      <FaMinusCircle
                        className="text-danger fs-4 fs-md-1 ms-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => removeFromCart(item.id)}
                      />
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>

      {/* Cart Total & Button */}
      <div className="mt-5 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <p className="text-success fw-bold mb-0 fs-5">
          Cart Amount: {getTotalAmount()} ₹
        </p>

        <button
          className=" btn btn-dark text-success fw-bold px-4"
          onClick={() => navigate("/Order")}
        >
          Proceed To Payment Page
        </button>
      </div>
    </div>
  );
}

export default Cart;
