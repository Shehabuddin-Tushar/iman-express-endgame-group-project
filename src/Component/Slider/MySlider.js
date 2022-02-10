import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Grid, Typography } from '@mui/material';
import myslider from './MySlider.module.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", boxShadow: "gray 0px 5px 15px",borderRadius:"0px 5px 5px 0px", marginRight: "30px",backgroundColor:"gray",height:"100px",width:"50px",alignItems:"center",justifyContent:"center" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", boxShadow: "gray 0px 5px 15px", borderRadius: "5px 0px 0px 5px", marginLeft: "30px", zIndex: "1", backgroundColor: "gray", height: "100px", width: "50px", alignItems: "center", justifyContent: "center"  }}
            onClick={onClick}
        />
    );
}

function MySlider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        // autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    return (
        <>
        <Slider {...settings} style={{ marginTop: "19px"}}>
            <div>
                <div>
                    <Grid container className={myslider.mydiv}>
                            <Grid className={myslider.overlay} item lg={6} md={6} sm={12} xs={12} style={{ marginBottom:"5px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant='h4' style={{ textAlign: "justify",marginLeft:"20px"}}>
                                    The country's No.1 <br/>digital platform</Typography>
                            <br/>
                                <Button  className={myslider.earnbtn}  variant="outlined" color="success" style={{width:"270px",height:"50px",fontSize:"20px"}}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Grow your business

                            </Button>
                        </Grid>
                        
                        
                    </Grid>
                </div>
                </div>
                


                <div>
                    <div>
                        <Grid container className={myslider.mydiv1}>
                            <Grid className={myslider.overlay}  item lg={6} md={6} sm={12} xs={12} style={{ marginBottom: "5px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant='h4' style={{ textAlign: "justify",marginLeft:"-30px" }}>
                                    Get rid of <br/>unemployment</Typography>
                                <br />
                                <Button className={myslider.earnbtn} variant="outlined" color="success" style={{ width: "270px", height: "50px", fontSize: "20px" }}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Build a career

                                </Button>
                            </Grid>


                        </Grid>
                    </div>
                </div>

                <div>
                    <div>
                        <Grid container className={myslider.mydiv2}>
                            <Grid className={myslider.overlay}  item lg={6} md={6} sm={12} xs={12} style={{ marginBottom: "5px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant='h4' style={{ textAlign: "justify", marginLeft: "-30px" }}>
                                    Find the <br/>things you need</Typography>
                                <br />
                                <Button className={myslider.earnbtn} variant="outlined" color="success" style={{ width: "270px", height: "50px", fontSize: "20px" }}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Buy the product

                                </Button>
                            </Grid>


                        </Grid>
                    </div>
                </div>


            
        </Slider>
        </>
  );
}

export default MySlider;
