import React, { useState } from "react";
import review from "../images/review.png";
import "./Review.css";

const Review = () => {
  const [rating, setRating] = useState([]);
  const handleLoading = (e) => {
    e.preventDefault();
  };
  const handleInputField = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newValue = { ...rating };
    newValue[field] = value;
    setRating(newValue);
  };

  return (
    <div className="container">
      <div className="welcome_to_course_review">
        <div className="row">
          <div className="course_review siliguri_fonts">
            <h2>
              তোমার একটি রিভিউ আমাদের কোর্স ও যারা আমাদের কোর্স নিতে চাইবে,
              <br />
              <span> তাদের কোর্স এনরোল করতে অনেক হেল্প করবে।</span>
            </h2>
            <p>নিম্নের তোমার রিভিউ দাও।</p>
          </div>

          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <div className="">
              <img src={review} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <form onSubmit={handleLoading} className="siliguri_fonts">
              <div className="row comment_field_row">
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    placeholder="Your Name Here"
                    type="text"
                    className="commentInputField"
                    name="name"
                    onBlur={handleInputField}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    placeholder="Career Role"
                    type="text"
                    className="commentInputField"
                    name="education"
                    onBlur={handleInputField}
                  />
                </div>
                <div className="col-lg-12 col-md-6 col-12">
                  <input
                    placeholder="Your Email"
                    type="email"
                    className="commentInputField"
                    name="email"
                    onBlur={handleInputField}
                  />{" "}
                </div>
                <div className="col-lg-8 col-md-7 col-12">
                  <input
                    placeholder="Your Img Link That You Want To Show"
                    type="text"
                    className="commentInputField"
                    name="img"
                    onBlur={handleInputField}
                  />
                </div>
                <div className="col-lg-4 col-md-5 col-12">
                  <input
                    placeholder="Ratings From 5"
                    type="text"
                    className="commentInputField"
                    name="rating"
                    onBlur={handleInputField}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    placeholder="Leave Your Comment Review Here"
                    type="text"
                    name="title"
                    className="textAreaField"
                    rows={7}
                    onBlur={handleInputField}
                  />
                  <button type="submit" className="classic_btn siliguri_fonts">
                    Send Us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
