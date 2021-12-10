import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { baseUrl } from "../../hooks/useUrl";

const AddPackage = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = baseUrl + "/AddPackage";
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
          history.push("/Service");
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
          <h2 className="text-center ">Add new package</h2>
          <br></br>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                {...register("name", { required: true })}
                className="form-control"
                placeholder="Package name"
              />
              {errors.name && (
                <span className="text-danger">Name is required!!</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="number"
                {...register("price", { required: true })}
                className="form-control"
                placeholder="Price"
              />
              {errors.price && (
                <span className="text-danger">Price is required!!</span>
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
                type="text"
                {...register("image", { required: true })}
                className="form-control"
                placeholder="Image URL"
              />
              {errors.image && <span className="text-danger">Image Url</span>}
            </div>

            <button type="submit" className="btn btn-success">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
