import React from "react";
import CurrenyFormat from "react-currency-format";
import { useHistory } from "react-router-dom"

import { useStateValue } from "../StateProvider";
import  {getBasketTotal} from  "../reducer"
import "./Subtotal.css";

function Subtotal() {
  const history = useHistory()
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrenyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thounsandSeperator={true}
        prefix={"₹"}
      />

      <button onClick={e => {!user ? history.push("/login") : history.push("/payment")}}>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
