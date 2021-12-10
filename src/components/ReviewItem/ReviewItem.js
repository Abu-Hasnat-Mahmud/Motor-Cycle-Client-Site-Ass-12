import React from "react";

const ReviewItem = (props) => {
  const { name, price, _id, description, image } = props.product;
  const { handleRemove } = props;
  return (
    <div className="col shadow mx-2 rounded" style={{width:'250px'}}>
      <img src={image} className="rounded mt-2"></img>
      <div className="px-2 py-1">
        <h4>{name}</h4>
        <p>Price: {price}</p>
       
        <p>Description: {description}</p>
        <button onClick={() => handleRemove(_id)} className="btn btn-danger mb-2">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
