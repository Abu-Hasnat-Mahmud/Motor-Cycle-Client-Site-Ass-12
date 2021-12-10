import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import "./PlaceOrder.css";
import { baseUrl } from "../../hooks/useUrl";
import { useHistory } from "react-router-dom";

const PlaceOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const history = useHistory();

  const onSubmit = (data) => {
    const url = baseUrl + "/Dashboard/MyOrder";

    data.items = getStoredCart();
    data.status = "Pending";

    //clearTheCart();
    fetch(url, {
      method: "POST",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((d) => {
        if (d) {
          clearTheCart();
          history.push("/MyOrder");          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        className="placeorder-form border rounded px-3 py-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center">Place Order</h1>
        <input defaultValue={user.displayName} {...register("name")} />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
        <input
          placeholder="phone number"
          defaultValue=""
          {...register("phone")}
        />

        <input className="btn btn-success" type="submit" />
      </form>
    </div>
  );
};

export default PlaceOrder;
