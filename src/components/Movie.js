import React from "react";
import ReviewList from "./ReviewList";
import RatingComponent from "./Stars";

export default class Movie extends React.Component {
  render() {
    return (
      <><><div className="card w-75">
            <div className="card-header bg-light text-black">
                <h2>Emma</h2>
                <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <h5>Rating</h5>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
            </div>

            <div className="card-body">
                <img
                    style={{ width: 500, height: 400 }}
                    src="https://upload.wikimedia.org/wikipedia/en/5/53/Emma_poster.jpeg"
                ></img>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                    {this.synopsis}
                    Jane Austen's beloved comedy about finding your equal and earning your happy ending, is reimagined in this. Handsome, clever, and rich, Emma Woodhouse is a restless queen bee without rivals in her sleepy little town. In this glittering satire of social class and the pain of growing up, Emma must adventure through misguided matches and romantic missteps to find the love that has been there all along.
                </div>
            </div>

            <div className="card-footer">
                <ReviewList />
            </div>
            <div>
                <RatingComponent />
            </div>
        </div><br></br></><div className="card w-75">
                <div className="card-header bg-light text-black">
                    <h2>When Harry Met Sally</h2>
                    <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <h5>Rating</h5>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                </div>

                <div className="card-body">
                    <img
                        style={{ width: 500, height: 400 }}
                        src="https://cdn.hmv.com/r/w-640/hmv/files/4c/4c717297-444a-474d-9422-bfd471215968.jpg"
                    ></img>
                    <br></br>
                    <div style={{ marginLeft: 10, marginRight: 10 }}>
                    Harry and Sally meet when she gives him a ride to New York after they both graduate from the University of Chicago. The film jumps through their lives as they both search for love, but fail, bumping into each other time and time again. Finally a close friendship blooms between them, and they both like having a friend of the opposite sex. But then they are confronted with the problem: "Can a man and a woman be friends, without sex getting in the way?" 
                    </div>
                </div>

                <div className="card-footer">
                    <ReviewList />
                </div>
                <div>
                <RatingComponent />
            </div>
            </div></>
      );
    }
  }




    