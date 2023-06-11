import React from "react";
import ReactStars from "react-rating";

function RatingComponent() {
    const ratingExample = {
        size: 50,
        count: 5,
        color: "black",
        activeColor: "yellow",
        value: 0,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />
      };
  return (
    <div>
      <h5>My Rating</h5>
      <ReactStars {...ratingExample} />
    </div>
  );
}
export default RatingComponent;


