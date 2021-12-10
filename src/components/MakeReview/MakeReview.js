import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { baseUrl } from "../../hooks/useUrl";
import useAuth from "./../../hooks/useAuth";
const MakeReview = () => {
  const history = useHistory();

  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const url = baseUrl + "/Reviews";
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
        if (d.acknowledged) {
          reset({ description: "", rating: "" });
        }
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 justify-content-center">
        <div className="mt-3">
          <h2 className="text-center ">Make Review</h2>
          <br></br>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="email"
                value={user?.email}
                {...register("userEmail", { required: true })}
                className="form-control"
                placeholder="User Email"
              />
              {errors.userEmail && (
                <span className="text-danger">Email is required!!</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="text"
                {...register("description", { required: true })}
                className="form-control"
                placeholder="Description"
              />
              {errors.description && (
                <span className="text-danger">Description is required!!</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="number"
                {...register("rating", { required: true })}
                className="form-control"
                placeholder="Rating"
              />
              {errors.rating && (
                <span className="text-danger">Rating is required!!</span>
              )}
            </div>

            <button type="submit" className="btn btn-success">
              Make Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeReview;
