import { Button, Card, Container, Typography } from "@mui/material";
import React from 'react';
import Slider from 'react-slick';
import './OurPartner.css';
// import img1 from '../../img/bkasj.jpg';
// import img2 from '../../img/nagad.jpg';
// import img3 from '../../img/upaypng.png';
// import img4 from '../../img/visa.jpg';


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
      
            <Container  >
            <Typography sx={{ color: "tomato" }} variant="body1">
          OUR
        </Typography>
        <Typography variant="h4" fontWeight="bold">
         PARTNERS
        </Typography>
<Slider {...settings}>



          <div className="container">
        <img className='bolimg' style={{width:'300px',marginLeft:'30px'}} src='https://i.ibb.co/nbzKd4W/visa.jpg' alt="visa" />
        
        </div>
           
         
        <div className="container">
        <img className='bolimg' style={{width:'300px'}} src='https://i.ibb.co/0YmnqFS/xpress-money.jpg' alt="xpress-money" />
       
        </div>
       
        <div className="container">
        <img className='bolimg' style={{width:'300px'}} src='https://i.ibb.co/0mTcwz2/upaypng.png' alt="upay" />
 
        </div>
         
        <div className="container">
        <img className='bolimg' style={{width:'300px'}} src='https://i.ibb.co/SB6XRbg/stripe.png' alt="stripe" />

        </div>
           
         
        <div className="container">
        <img className='bolimg' style={{width:'300px'}} src='https://i.ibb.co/gg54LG4/rocket.jpg' alt="rocket" />

        </div>
        
        <div className="container">
        <img className='bolimg'style={{width:'280px'}} src='https://i.ibb.co/SQKkTrr/Payoneer-Logo-wine.png' alt="payoneer" />

        </div>
        <div className="container">
        <img className='bolimg'style={{width:'300px'}} src='https://i.ibb.co/YbwpFQ7/EBL.jpg' alt="EBL sky" />

        </div>
        <div className="container">
        <img className='bolimg'style={{width:'300px'}} src='https://i.ibb.co/74r8kLv/nagad.jpg' alt="nagad" />

        </div>
        <div className="container">
        <img className='bolimg'style={{width:'300px'}} src='https://i.ibb.co/8Bfbw2x/datch-bangla.jpg' alt="Datch Bangla" />

        </div>
        <div className="container">
        <img className='bolimg'style={{width:'300px'}} src='https://i.ibb.co/B6btH1H/bangladesh-bank.jpg' alt="bd bank" />

        </div>
        <div className="container">
        <img className='bolimg'style={{width:'300px'}} src='https://i.ibb.co/MhqM5n4/bkasj.jpg' alt="bkash" />

        </div>
           
        
        </Slider></Container>
       
    );
}

export default OurPartnerSlider;