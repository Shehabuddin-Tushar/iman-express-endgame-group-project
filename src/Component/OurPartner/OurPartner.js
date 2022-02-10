import { Button, Card, Container, Typography } from "@mui/material";
import React from 'react';
import Slider from 'react-slick';
import './OurPartner.css';


const OurPartnerSlider=()=>{
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,borderRadius:'90%', display: "block",padding:'2px', background: "black" }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,borderRadius:'90%', display: "block",padding:'2px', background: "black" }}
        onClick={onClick}
      />
    );
  }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        prevArrow:<SamplePrevArrow />,
        nextArrow:<SampleNextArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          
      };
    return(
        <div>
            <Container>
                <h2 style={{padding:'5px'}}>Our Partners</h2>
<Slider {...settings}>

          <div style={{border:'1px solid black'}}>
        <img className='img' style={{width:'300px'}} src='https://i.ibb.co/17fJQYR/nagad.png' alt="" />
        
        </div>
           
          <div>
        <img  className='img' style={{width:'250px'}} src='https://i.ibb.co/rM36ynn/rocket.jpg' alt="" />
       
        </div>
          <div>
        <img  className='img' style={{width:'280px'}} src='https://i.ibb.co/nbDzycs/bkash.jpg' alt="" />
 
        </div>
          <div>
        <img className='img' style={{width:'300px'}} src='https://i.ibb.co/17fJQYR/nagad.png' alt="" />

        </div>
           
          <div>
        <img className='img' style={{width:'250px'}} src='https://i.ibb.co/rM36ynn/rocket.jpg' alt="" />

        </div>
          <div>
        <img className='img' style={{width:'280px'}} src='https://i.ibb.co/nbDzycs/bkash.jpg' alt="" />

        </div>
           

        </Slider></Container>
        </div>
    );
}

export default OurPartnerSlider;