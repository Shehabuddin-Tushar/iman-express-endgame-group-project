import React from 'react';
import Container from '@mui/material/Container';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const NewsRoom = () => {
    const blogApiThree = [
        {
            id: 1,
            img: "https://pathao.com/wp-content/uploads/2021/10/Insurance-Safety-Pathao_-1536x715-1-348x224.png",
            category: "Bangladesh",
            description: "Pay Later feature is now on Iman Xpress Rides!  ",
            date: "Feb 01, 2021"
        },
        {
            id: 2,
            img: "https://pathao.com/wp-content/uploads/2021/08/Blog-1-348x224.jpg",
            category: "Newsroom",
            description: "Manage transportation for your employees with Iman Xpress For Business  ",
            date: "Mar 4, 2022"
        },
        {
            id: 3,
            img: "https://pathao.com/wp-content/uploads/2021/07/FreeTreat_Blog-4-348x224.png",
            category: "Newsroom",
            description: "Moving Safely is the New Normal By Hussain M Elius ",
            date: "January 9, 2022"
        }
    ]
    return (
        <div className='blogContainer'>
            <Container>
                <div>
                    <div className='moreBlogs'>
                        <h1>News room</h1>
                        <Link to="/moreBlogs">
                            <button className='allBlogsBtn'>
                            <p>View all</p>
                            <i><i class="fas fa-arrow-right"></i></i>
                            </button>
                        </Link>
                    </div>
                <Grid container spacing={2}>
                    {blogApiThree.map(blog => <Grid item xs={12} md={4} sm={6} key={blog.id}>
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
            </Container>
        </div>
    );
};

export default NewsRoom;