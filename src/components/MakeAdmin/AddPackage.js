import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { baseUrl } from "../../hooks/useUrl";

const MakeAdmin = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = baseUrl + "/Users/MakeAdmin";
    fetch(url, {
      method: "PUT",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((d) => {        
        if (d.modifiedCount) {
          reset({ email: "" });
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
          <h2 className="text-center ">Make Admin</h2>
          <br></br>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="email"
                {...register("email", { required: true })}
                className="form-control"
                placeholder="Email"
              />
              {errors.name && (
                <span className="text-danger">Email is required!!</span>
              )}
            </div>

            <button type="submit" className="btn btn-success">
              Make Admin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
