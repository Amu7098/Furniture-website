import { useContext } from "react";
import { ProductContext } from "../components/context/ProductContext";

function Order() {
  const { getTotalAmount } = useContext(ProductContext);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* ================= Delivery Information ================= */}
        <div className="col-lg-6">
          <h3 className="fw-bold mb-4 border-bottom pb-2">
            Delivery Information
          </h3>

          <form>
            <div className="row mb-4 align-items-center">
              <label className="col-sm-4 col-form-label fw-semibold">
                First Name
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-sm-4 col-form-label fw-semibold">
                Last Name
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-sm-4 col-form-label fw-semibold">
                Email ID
              </label>
              <div className="col-sm-8">
                <input type="email" className="form-control" />
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-sm-4 col-form-label fw-semibold">
                Street
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-sm-4 col-form-label fw-semibold">
                City
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-sm-4 col-form-label fw-semibold">
                State
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-sm-4 col-form-label fw-semibold">
                Country
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-sm-4 col-form-label fw-semibold">
                ZIP Code
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-sm-4 col-form-label fw-semibold">
                Contact Number
              </label>
              <div className="col-sm-8">
                <input type="number" className="form-control" />
              </div>
            </div>
          </form>
        </div>

        {/* ================= Payment Section ================= */}
        <div className="col-lg-6">
          <h3 className="fw-bold mb-4 border-bottom pb-2">Order Summary</h3>

          <p className="fs-4 fw-bold text-success">
            Amount: ₹{getTotalAmount()}
          </p>

          <div className="mt-4">
            <button className="btn btn-dark px-5 py-2 fw-bold">Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
