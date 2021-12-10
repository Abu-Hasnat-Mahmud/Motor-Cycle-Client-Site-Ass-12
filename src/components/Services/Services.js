import React from "react";
import Service from "../Service/Service";
import "../Home/Home.css";
import usePackages from "../../hooks/usePackages";

const Services = () => {
  const [services, setServices] = usePackages();

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5" style={{ color: "#1ac167" }}>
        Our Products
      </h1>
      <div className="row row-cols-4 gy-4 justify-content-around">
        {services.map((item) => (
          <Service key={item._id} service={item}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
