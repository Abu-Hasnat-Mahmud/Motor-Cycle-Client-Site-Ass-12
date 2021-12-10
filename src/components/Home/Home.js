import React from "react";
import usePackages from "../../hooks/usePackages";
import Reviews from "../Reviews/Reviews";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const [services, setServices] = usePackages();

  return (
    <>
      <div className="bg-container">
        <div className="">
          <h5 className="text-white">Join With Us</h5>
          <h1 className="text-light">
            <span style={{ color: "#1ac167" }}>Your Journey</span> Begins Now
          </h1>
        </div>
      </div>
      <div className="container my-5">
        <h1 className="text-center mb-3" style={{ color: "#1ac167" }}>
          Products
        </h1>
        <div className="row row-cols-3  justify-content-evenly">
          {services.slice(0, 6).map((item) => (
            <Service key={item._id} service={item}></Service>
          ))}
        </div>
      </div>

      <div className="container my-5">
        <h1 className="text-center mb-3" style={{ color: "#1ac167" }}>
          Reviews
        </h1>
        <Reviews></Reviews>
      </div>

      <div className="container my-5">
        <h1 className="text-center mb-3" style={{ color: "#1ac167" }}>
          Our Photo Gallary
        </h1>
        <div className="row g-4">
          <img
            style={{ height: "300px" }}
            className="col-md-4 col-12"
            src="https://cdn.shopify.com/s/files/1/0461/8371/0869/files/insta-02.jpg?v=1600932016"
          />
          <img
            style={{ height: "300px" }}
            className="col-md-8 col-12"
            src="https://cdn.shopify.com/s/files/1/0461/8371/0869/files/video-banner-1.jpg?v=1597839744"
          />

          <img
            style={{ height: "300px" }}
            className="col-md-4 col-12"
            src="	https://cdn.shopify.com/s/files/1/0461/8371/0869/files/insta-04.jpg?v=1600932040"
          />
          <img
            style={{ height: "300px" }}
            className="col-md-4 col-12"
            src="	https://cdn.shopify.com/s/files/1/0461/8371/0869/files/insta-01.jpg?v=1600931971"
          />
          <img
            style={{ height: "300px" }}
            className="col-md-4 col-12"
            src="	https://cdn.shopify.com/s/files/1/0461/8371/0869/files/insta-03.jpg?v=1600932028"
          />
        </div>
      </div>
      <div className="container my-5 subscribe">
        <div className="row">
          <h1
            className="col-12 col-md-8 text-white"
            style={{ fontSize: "48px" }}
          >
            Subscribe To Our Newsletter
          </h1>
          <div className="col-12 col-md-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="subscribe-input"
            ></input>
            <span>
              <button>Subscribe</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
