import React, { useEffect, useState } from "react";
import { baseUrl } from "../../hooks/useUrl";
import Review from "./Review";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    const url = baseUrl + "/Reviews";
    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setAllReviews(data);
      });
  },[]);

  return (
    <div className="row row-cols-1 row-cols-md-3 justify-content-evenly">
      {allReviews.map((item) => {
        return <Review key={item._id} review={item}></Review>;
      })}
    </div>
  );
};

export default Reviews;
