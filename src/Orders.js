import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Orders.css";
import Order from "./Order";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db
        //accessing the users collection
        .collection("users")
        //getting the specific user
        .doc(user?.uid)
        .collection("orders")
        //accessing the specific order and wants to organize by date created and descending order. The most recent at top.
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          //Mapping through the list and getting the id of the doc stored on the id key and get the data of the doc such as amount, image, etc. Then turns into array and set orders to this array.
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
    //if using an outside variable we have to put it in the empy [] below.
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
