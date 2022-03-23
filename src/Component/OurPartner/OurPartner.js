import {  Container, Typography,Grid } from "@mui/material";
import Slider from 'react-slick';
import './OurPartner.css';
import React , { useState,useEffect } from 'react';




const OurPartnerSlider=()=>{
  const [partners,setPartners] = useState([]);
  
  useEffect(()=>{
    fetch('https://iman-xpress.herokuapp.com/api/partner/getPartner')
    .then(res=>res.json())
    .then(data=>setPartners(data))
  },[])
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
        margin:10,
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
      
            <Container sx={{my:5}}>
            <Typography sx={{ color: "tomato" }} variant="body1">
          OUR
        </Typography>
        <Typography variant="h4" fontWeight="bold">
         PARTNERS
        </Typography>
        {/* {
          partners.map(part=>
            
            )
        } */}

<Slider {...settings} >
        {
        partners.map(partner=>
          <div
          key={partner._id}
          >
              <img src={partner.image} alt="empty" className='bolimg' style={{width:'300px',height:'150px', marginLeft:'30px'}}/>
          </div>
          
          )
        }
        
        </Slider></Container>
       
    );
}

export default OurPartnerSlider;