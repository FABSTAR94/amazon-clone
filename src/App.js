import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    // You were able to use these components when you installed react-router-dom on your terminal
    <Router>
      {/* This is using the BEM convention. for lowercase a on the classname */}
      <div className="app">
        {/* If you put the header comp outside it is saying to render it regardless what route you are on */}
        <Header />
        <Switch>
          {/* When I am in this path render the home & header */}
          <Route path="/checkout">
            {/* If you go to the end of the word and press control space bar you can automatically fill the import */}
            <Checkout />
          </Route>
          {/* Remember that your default route goes at the very bottom */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
