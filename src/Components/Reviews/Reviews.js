import { Container, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [reviews, setReviews] = useState([]);
  ///load reviews
  useEffect(() => {
    axios
      .get("https://nameless-fortress-10028.herokuapp.com/review")
      .then((res) => {
        setReviews(res.data);
      });
  }, []);
  return (
    <div>
      <Container sx={{ my: 6 }}>
        <Typography sx={{ color: "tomato" }} variant="body1">
          REVIEWS
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          WHY CUSTOMER LOVE US
        </Typography>

        <Container>
          <Slider {...settings}>
            {reviews?.map((review) => (
              <Box>
                <Box sx={{ textAlign: "left", p: 3, mt: 3 }}>
                  <Typography variant="subtitle1">
                    "{review?.review}"
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 3,
                    }}
                  >
                    {" "}
                    <Typography color="text.secondary">
                      {review?.name}
                    </Typography>
                    <Rating
                      sx={{ color: "tomato" }}
                      name="half-rating-read"
                      defaultValue={review?.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Container>
      </Container>
    </div>
  );
}

export default Reviews;
