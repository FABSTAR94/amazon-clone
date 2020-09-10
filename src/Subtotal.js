import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  //React router has broswer History in which gives us browser history.
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        // Being used as a prop
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length}):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        // go to 2 decimal places
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      {/* When click push a page into browser called payment page. History.push
      helps to progamatically takes the user withoutchanging style of button. If
      u use link it will make it look like a link in which u dont want. You want
      a button. */}
      <button onClick={(e) => history.push("./payment")}>
        Proceed to Checkout{" "}
      </button>
    </div>
  );
}

export default Subtotal;
