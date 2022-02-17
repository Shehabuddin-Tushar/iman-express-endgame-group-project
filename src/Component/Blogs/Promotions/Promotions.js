import React from 'react';
import Container from '@mui/material/Container';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Promotions = () => {
    const blogApiThree = [
        {
            id: 1,
            img: "https://i.ibb.co/ZXpjq5m/promotion-Pic-One.jpg",
            category: "Bangladesh",
            description: "You can enjoy Iman Xpress Points benefits from Nitol Electronics now!  ",
            date: "Feb 01, 2021"
        },
        {
            id: 2,
            img: "https://i.ibb.co/2MqVfdM/promotion-Pic-Two.jpg",
            category: "Newsroom",
            description: "Time for a home renovation! ",
            date: "Mar 4, 2022"
        }
    ]
    return (
        <div className='blogContainer'>
            <Container>
                <div>
                    <div className='moreBlogs'>
                        <h1>Promo-tions</h1>
                        <Link to="/moreBlogs">
                            <button className='allBlogsBtn'>
                            <p>View all</p>
                            <i><i className="fas fa-arrow-right"></i></i>
                            </button>
                        </Link>
                    </div>
                <Grid container spacing={2}>
                    {blogApiThree.map(blog => <Grid item xs={12} md={6} sm={12} key={blog.id}>
                        <Paper elevation={4}>
                            <div className='blogBox'>
                                <div>
                                    <img src={blog.img} alt="Empty!" style={{width:"100%", height: "200px", borderRadius: "5px"}}/>
                                </div>
                                <div className='blogBoxContent'>
                                    <div className='blogTitle'>
                                        <span>{blog.category}</span>
                                        <li>{blog.date}</li>
                                    </div>
                                    <p>{blog.description}</p>
                                </div>
                            </div>
                        </Paper>
                    </Grid>)}
                    </Grid>
                </div>
                <hr style={{marginTop: "80px"}}/>
            </Container>
        </div>
    );
};

export default Promotions;