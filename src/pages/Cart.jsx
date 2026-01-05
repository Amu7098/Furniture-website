import { useContext } from "react";
import { ProductContext } from "../components/context/ProductContext";
import { FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, productList, removeFromCart, getTotalAmount } =
    useContext(ProductContext);

  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      {/* ================= Products Table ================= */}
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
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
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                    </td>
                    <td className="fw-bold">{item.product}</td>
                    <td>₹{item.price}</td>
                    <td className="fw-bold">{cartItems[item.id]}</td>
                    <td className="fw-bold">
                      ₹{item.price * cartItems[item.id]}
                    </td>
                    <td>
                      <FaMinusCircle
                        className="text-danger fs-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => removeFromCart(item.id)}
                      />
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>

      {/* ================= Cart Total & Checkout ================= */}
      <div className="mt-5 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 p-3 shadow-sm rounded bg-light">
        <p className="text-success fw-bold mb-0 fs-5">
          Cart Amount: ₹{getTotalAmount()}
        </p>

        <button
          className="btn btn-dark text-success fw-bold px-4 py-2"
          onClick={() => navigate("/Order")}
        >
          Proceed To Payment Page
        </button>
      </div>
    </div>
  );
}

export default Cart;
