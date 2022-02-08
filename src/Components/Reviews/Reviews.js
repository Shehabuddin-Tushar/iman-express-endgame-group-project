import { Container, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { grey } from "@mui/material/colors";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        // boxShadow: "gray 0px 5px 15px",
        borderRadius: "50%",
        marginRight: "-30px",
        backgroundColor: grey[300],
        height: "50px",
        width: "50px",

        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        boxShadow: "gray 0px 5px 15px",
        borderRadius: "50%",
        marginLeft: "-30px",
        zIndex: "1",
        marginRight: "-30px",
        backgroundColor: grey[300],
        height: "50px",
        width: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}

function Reviews() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
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
