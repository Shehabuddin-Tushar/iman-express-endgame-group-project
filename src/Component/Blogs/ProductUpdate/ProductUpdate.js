import React from 'react';
import Container from '@mui/material/Container';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductUpdate = () => {
    const blogApiTwo = [
        {
            id: 1,
            img: "https://i.ibb.co/41S2W4Z/product-Update-Pic-One-Edit.jpg",
            category: "Bangladesh",
            description: "Safe Trips, Insured! ",
            date: "Feb 01, 2021"
        },
        {
            id: 2,
            img: "https://i.ibb.co/Qpjhtwg/product-Update-Pic-Two.jpg",
            category: "Iman Bike",
            description: "Now You Can Send Voice Messages! ",
            date: "Mar 4, 2022"
        },
        {
            id: 3,
            img: "https://i.ibb.co/8KPpCbG/product-Update-Pic-Three.jpg",
            category: "Iman Food",
            description: "Iman Food Presents Food’s On Me",
            date: "January 9, 2022"
        }
    ]
    return (
        <div className='blogContainer'>
            <Container>
                <div>
                    <div className='moreBlogs'>
                        <h1>Product Update</h1>
                        <Link to="/moreBlogs">
                            <button className='allBlogsBtn'>
                            <p>View all</p>
                            <i><i className="fas fa-arrow-right"></i></i>
                            </button>
                        </Link>
                    </div>
                <Grid container spacing={2}>
                    {blogApiTwo.map(blog => <Grid item xs={12} md={4} sm={6} key={blog.id}>
                        <Paper elevation={4}>
                            <div className='blogBox'>
                                <div>
                                    <img src={blog.img} alt="Empty!" style={{width:"100%", height: "200px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}/>
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

export default ProductUpdate;