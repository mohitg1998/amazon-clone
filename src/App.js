import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Checkout/Payment";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import Orders from "./components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51I3HAXLBerXJ9c7z6kDhWVDOrxSFBm33Z5y8oHCJXfDBrpiiTDxGQBDoFSLwoLYjc5xXn59BHQQ7aE59nWRiTVB500dssxOj6p"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once  when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="root">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

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
