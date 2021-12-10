import React, { useEffect, useState } from "react";
import Order from "./Order";

import usePackages from "../../hooks/usePackages";
import { baseUrl } from "../../hooks/useUrl";
import useAuth from "../../hooks/useAuth";

const ManageAllOrder = () => {
  const [packages] = usePackages();
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = baseUrl + `/Order`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleUpdateStatus = (key, status) => {
    var result = window.confirm(`Are you sure want to ${status} booking?`);

    if (result) {
      const updateOrder = orders.find((order) => order._id == key);
      updateOrder.status = status;
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
      <h2 className="text-center mb-5">All Booking</h2>

      <div className=" row row-cols-3 gy-4">
        {orders.map((order) => (
          <Order
            key={order._id}
            order={order}
            handleUpdateStatus={handleUpdateStatus}
          >
            <button
              onClick={() => handleUpdateStatus(order._id, "Approved")}
              className="btn btn-success mb-2 me-3"
            >
              Shipped
            </button>
            <button
              onClick={() => handleUpdateStatus(order._id, "Delete")}
              className="btn btn-danger mb-2"
            >
              Delete
            </button>
          </Order>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrder;
