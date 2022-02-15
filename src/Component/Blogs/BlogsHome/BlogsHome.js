import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import NewsRoom from '../NewsRoom/NewsRoom';
import ProductUpdate from '../ProductUpdate/ProductUpdate';
import './BlogsHome.css';

const BlogsHome = () => {

    const blogApi = [
        {
            id: 1,
            img: "https://pathao.com/wp-content/uploads/2021/10/Insurance-Safety-Pathao_-1536x715-1-348x224.png",
            category: "Iman Rider",
            description: "Iman Xpress Send your cart to food update",
            date: "Jan 1, 2022"
        },
        {
            id: 2,
            img: "https://pathao.com/wp-content/uploads/2021/08/Blog-1-348x224.jpg",
            category: "Iman Food",
            description: "Looking for all the burgers in Dhaka",
            date: "Jan 4, 2022"
        },
        {
            id: 3,
            img: "https://pathao.com/wp-content/uploads/2021/07/FreeTreat_Blog-4-348x224.png",
            category: "Iman Courier",
            description: "Iman Xpress Send courier now more affordable!",
            date: "Jan 9, 2022"
        }
    ]
    return (
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
                            <img src='https://i.ibb.co/wznDZgT/home-Blog-Pic-Three.jpg' alt='Empty!' style={{width:"300px"}}/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className='blogsHomeContainer-PartTwo'>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sm={6} >
                            <Paper elevation={4}>
                                <div className='blogBoxThree'>
                                    <div>
                                        <img src='https://pathao.com/wp-content/uploads/2021/06/Blog-3-538x343.jpg' alt="Empty!" style={{width:"100%", height: "400px", borderRadius: "5px"}}/>
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
                        <Grid item xs={12} md={6} sm={6}>
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
            <NewsRoom></NewsRoom>
        </div>
    );
};

export default BlogsHome;