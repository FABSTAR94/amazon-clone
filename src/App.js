import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// This is a public key which is fine for it to be visible
const promise = loadStripe(
  "pk_test_51HPx7bHNiM4igthiuX3TAfiroTYlMINtXWKPUGtsGudMPbh9ZEzH4IE7LTEBXAdDzHUFY6uB8dyzDtj202phEpay00VePshP3O"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads when [] is empty.
    //whenever the authentication changes it will give us the authentication user.
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // You were able to use these components when you installed react-router-dom on your terminal
    <Router>
      {/* This is using the BEM convention. for lowercase a on the classname */}
      <div className="app">
        {/* If you put the header comp outside it is saying to render it regardless what route you are on */}
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* When I am in this path render the home & header */}
          <Route path="/checkout">
            <Header />
            {/* If you go to the end of the word and press control space bar you can automatically fill the import */}
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* Remember that your default route goes at the very bottom */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
