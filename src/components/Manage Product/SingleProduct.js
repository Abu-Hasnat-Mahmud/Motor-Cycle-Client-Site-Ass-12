import React from "react";
import "./SingleProduct.css";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../hooks/useUrl";

const SingleProduct = (props) => {
  const { _id, name, image, description, price } = props.service;
  const history = useHistory();

  const handleDelete = (id) => {
    const result = window.confirm("Are you sure to delete?");
    if (result) {
      const url = baseUrl + `/package/delete/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if(data.deletedCount){
                history.push("/Service");
            }
          
        });
    }
  };
  return (
    <div className="col shadow  service-item rounded p-2 mb-3">
      <img src={image} className="rounded"></img>
      <div className="m-2 lh-sm">
        <h3 className="">{name}</h3>
        <h5 className="">Price: {price} $</h5>
        <p className="text-muted lh-sm">{description}</p>
      </div>
      <div className="text-center my-4">
        <button className="btn btn-danger" onClick={() => handleDelete(_id)}>
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
