import React from "react";
import "./Service.css";
import { useHistory } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";

const Service = (props) => {
  const { _id, name, image, description, price } = props.service;
  const history=useHistory();

  const handleBook =(id)=>{
    const result=window.confirm("Are you sure to booking?");
    if(result){
      addToDb(id);
      history.push('/OrderReview');
    }
  }
  return (
    <div className="col shadow  service-item rounded p-2 mb-3">
      <img src={image} className="rounded"></img>
      <div className="m-2 lh-sm">
        <h3 className="">{name}</h3>
        <h5 className="">Price: {price} $</h5>
        <p className="text-muted lh-sm">{description}</p>
      </div>
      <div className="text-center my-4">
        <button className="btn btn-primary" onClick={()=>handleBook(_id)}>Buy Now</button>
      </div>
    </div>
  );
};

export default Service;
