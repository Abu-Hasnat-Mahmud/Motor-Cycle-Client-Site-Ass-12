import React from "react";
import SingleProduct from "./SingleProduct";
import "../Home/Home.css";
import usePackages from "../../hooks/usePackages";

const ManageProduct = () => {
  const [services, setServices] = usePackages();

  return (
    <div className="container my-3">
      <h1 className="text-center mb-5" style={{ color: "#1ac167" }}>
        Manage Products
      </h1>
      <div className="row row-cols-3 gy-4 justify-content-around">
        {services.map((item) => (
          <SingleProduct key={item._id} service={item}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
