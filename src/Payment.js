import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        {/* This will say how many basket items you have inside and if you click
        on it it will take you back to the checkout page. */}
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Raect Lane</p>
            <p>San Francisco, CA</p>
          </div>
        </div>
        {/* review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items & delivery</h3>
          </div>

          {/* all products will go here, we are reusing the components from the checkout page so we can see same items here */}
          <div className="payment__items">
            {basket.map((item) => {
              //you need to return and put () to return js snippets
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        {/* payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* This is where we will add stripe */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
