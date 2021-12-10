import React from "react";

const ReviewItem = (props) => {
  const { name, email, _id, address, phone } = props.order;
  const { handleUpdateStatus } = props;
  return (
    <div className="col shadow mx-md-2 rounded" style={{ width: "500px" }}>
      <div className="p-2 ">
        <h4>{name}</h4>
        <p>Email: {email}</p>

        <p>Address: {address}</p>
        <p>Phone No: {phone}</p>
        {props.children}
        {/* <button
          onClick={() => handleUpdateStatus(_id)}
          className="btn btn-danger mb-2"
        >
          Approve
        </button> */}
      </div>
    </div>
  );
};

export default ReviewItem;
