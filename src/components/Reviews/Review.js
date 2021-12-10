import React from "react";

const Review = (props) => {
  const { userEmail, description, rating } = props.review;

  const ratingHtml = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratingHtml.push(<i className="fa fa-star rating-color"></i>);
    } else {
      ratingHtml.push(<i className="far fa-star rating-color"></i>);
    }
  }

  return (
    <div className="col shadow  service-item rounded p-3 mb-3">
      <h4>{userEmail}</h4>
      <p>Message: {description}</p>
      <p>Rating: {ratingHtml}</p>
    </div>
  );
};

export default Review;
