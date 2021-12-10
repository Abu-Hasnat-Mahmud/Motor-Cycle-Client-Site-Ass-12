import React, { useEffect, useState } from "react";
import Order from "./Order";

import usePackages from "../../hooks/usePackages";
import { baseUrl } from "../../hooks/useUrl";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
  const [packages] = usePackages();
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = baseUrl + `/MyOrder/${user.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleUpdateStatus = (key) => {
    var result = window.confirm("Are you sure want to cancel booking?");

    if (result) {
      const updateOrder = orders.find((order) => order._id == key);
      updateOrder.status = "Delete";
      const url = baseUrl + "/MyOrder";

      fetch(url, {
        method: "PUT",
        dataType: "JSON",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateOrder),
      })
        .then((res) => res.json())
        .then((d) => {
          if (d) {
            const newOrders = orders.filter((p) => p._id !== key);
            setOrders(newOrders);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container mt-3 mb-5">
      <h2 className="text-center mb-5">My Order</h2>
      <div className=" row row-cols-2">
        {orders.map((order) => (
          <Order
            key={order._id}
            order={order}
            handleUpdateStatus={handleUpdateStatus}
          >
            <button
              onClick={() => handleUpdateStatus(order._id)}
              className="btn btn-danger mb-2"
            >
              Cancel
            </button>
          </Order>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
