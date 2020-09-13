import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  // Here we are just creating two pieces of state.
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  //Whenever the basket changes it will make this request getClinetSecret.
  //And it will update the stripe special stripe secret which allows us to charge the customer
  //the correct amount.
  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer.
    const getClientSecret = async () => {
      //axios is a way of making requests such as post, get,etc.
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies subunits. *100 changes it into cents.
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  // takes an event
  //we are going to listen for changes in the CardElement.
  // and display any errors as the customer types in their card details.
  const handleSubmit = async (event) => {
    //This will stop it from refreshing.
    event.preventDefault();
    setProcessing(true);

    //uses the client secret to know how much to charge thenthe payment meth is the card then we find the card that matches.
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      //PaymentIntent is the payment confirmation.
      .then(({ paymentIntent }) => {
        //we are going to push into the database.
        //we are targeting the user collections. this is using a nosql data structure.
        //We are going into the users collection, then we are going to that users orders, then we are going into the document and we are going to use the paymentintent id
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };
  const handleChange = (event) => {
    // if the event is empty then go ahead and disable the button
    setDisabled(event.empty);
    // if there is an error go ahead and show the error otherwise show nothing.
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        {/* This will say how many basket items you have inside and if you click.
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
            <p>555 React Ave</p>
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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* If error with anything such as card num*/}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
