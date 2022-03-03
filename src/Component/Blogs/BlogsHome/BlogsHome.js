import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import NewsRoom from '../NewsRoom/NewsRoom';
import ProductUpdate from '../ProductUpdate/ProductUpdate';
import Promotions from '../Promotions/Promotions';
import './BlogsHome.css';

const BlogsHome = () => {

    const blogApi = [
        {
            id: 1,
            img: "https://i.ibb.co/1ngkZw4/blog-Home-Pic-Three.jpg",
            category: "Iman Rider",
            description: "Iman Xpress Send your cart to food update",
            date: "Jan 1, 2022"
        },
        {
            id: 2,
            img: "https://i.ibb.co/rpCC80c/blog-Home-Pic-Four.jpg",
            category: "Iman Food",
            description: "Looking for all the burgers in Dhaka",
            date: "Jan 4, 2022"
        },
        {
            id: 3,
            img: "https://i.ibb.co/2McHBr6/blog-Home-Pic-Five.jpg",
            category: "Iman Courier",
            description: "Iman Xpress Send courier now more affordable!",
            date: "Jan 9, 2022"
        }
    ]

    // https://ibb.co/WVz0nBW
    // https://ibb.co/2ncQ9SR
    // https://ibb.co/xgh9R6g
    // https://ibb.co/NCdvc5S
    // https://ibb.co/dpddCML

    // https://ibb.co/c82Vd9v
    // https://ibb.co/jbZqsXN
    // https://ibb.co/Qcg491x
    // https://ibb.co/P6CpCGP
    return (
        <>
            <Navbar/>
        <div>
            <Container className='blogsHomeContainer'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sm={6} >
                        <div className='blogsHomeTitle-PartOne'>
                            <div>
                                <h1>Iman Xpress Blog</h1>
                                <p>Announcements, updates, releases, and more</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                        <div className='blogsHomeTitle-PartTwo'>
                            <img src='https://i.ibb.co/tcNrn3c/blog-Home-Pic-One-1.png' alt='Empty!' style={{width:"300px", height: "200px"}}/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className='blogsHomeContainer-PartTwo'>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sm={12} >
                            <Paper elevation={4}>
                                <div className='blogBoxThree'>
                                    <div>
                                        <img src='https://i.ibb.co/G5PwPQ8/blog-Home-Pic-Two.jpg' alt="Empty!" style={{width:"100%", height: "400px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}/>
                                    </div>
                                    <div className='blogBoxContent'>
                                        <div className='blogTitle'>
                                            <span>Promotion</span>
                                            <li>Feb 12, 2020</li>
                                        </div>
                                        <p>Five things you need to carry on a daily basis </p>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6} sm={12}>
                            {blogApi.map(blog => <Paper elevation={4}>
                                <div className='blogBoxTwo'>
                                    <div className='blogBoxContent'>
                                        <div className='blogTitle'>
                                            <span>{blog.category}</span>
                                            <li>{blog.date}</li>
                                        </div>
                                        <p>{blog.description}</p>
                                    </div>
                                    <div>
                                        <img src={blog.img} alt="Empty!"/>
                                    </div>
                                </div>
                            </Paper>)}
                        </Grid>
                    </Grid>

                </Container>
            </div>
            <ProductUpdate></ProductUpdate>
            <Promotions></Promotions>
            <NewsRoom></NewsRoom>
            </div>
        <Footer/>
        </>
    );
};

export default BlogsHome;