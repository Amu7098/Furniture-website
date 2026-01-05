import { useContext, useState } from "react";
import { ProductContext } from "../components/context/ProductContext";
import { productList } from "../assets/assets";
import { FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, productList, removeFromCart, getTotalAmount } =
    useContext(ProductContext);
  const navigate=useNavigate() 
  return (
    <div className="container-fluid mt-4 px-4">
      <table className="table table-dark table-stripped table-hover">
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
                    <img src={item.image} alt="" className="image-cart" />
                  </td>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                  <td>{cartItems[item.id]}</td>
                  <td>{item.price * cartItems[item.id]}</td>
                  <td>
                    <FaMinusCircle
                      className="text-danger fs-1 ms-3"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="mt-5">
        <p className="text-success fw-bold">Cart Amount:{getTotalAmount()} ₹</p>
      </div>

      <div className="mt-5 text-end ">
        <button
          className="btn btn-dark text-success fw-bold"
          onClick={() => navigate("/Order")}
        >
          Proceed To Payment Page
        </button>
      </div>
    </div>
  );
}

export default Cart;
