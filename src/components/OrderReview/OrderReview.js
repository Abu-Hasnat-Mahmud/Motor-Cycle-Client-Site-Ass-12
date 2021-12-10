import React from "react";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import { useHistory } from "react-router";
import usePackages from "../../hooks/usePackages";

const OrderReview = () => {
  const [packages] = usePackages();

  const [cart, setCart] = useCart(packages);
  const history = useHistory();

  const handleRemove = (key) => {
    const newCart = cart.filter((p) => p._id !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  const handleProceedToShipping = () => {
    // setCart([]);
    // clearTheCart();
    history.push("/PlaceOrder");
  };

  return (
    <div className="container mt-3 mb-5">
      <div className="row">
        <div className="col-12 col-md-9 row row-cols-3 justify-content-around">
          {cart.map((product) => (
            <ReviewItem
              key={product._id}
              product={product}
              handleRemove={handleRemove}
            ></ReviewItem>
          ))}
        </div>
        <div className="col-12 col-md-3 border-start px-3 py-4 d-flex justify-content-around">
          <Cart cart={cart}>
            <button
              onClick={handleProceedToShipping}
              className="btn btn-warning"
            >
              Proceed to Booking
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
