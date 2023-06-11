import React from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
// import Stars from './Stars';


export default class ReviewList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron card-header bg-dark text-white">
          <h4>Reviews</h4>
        </div>
        <ReviewForm />
        <br></br>
        <Review />
      </div>
    );
  }
}