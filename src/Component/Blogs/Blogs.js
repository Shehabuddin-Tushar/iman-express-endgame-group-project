import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Grid, Paper } from '@mui/material';
import axios from 'axios';
import "./Blogs.css"
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogApi, setBlogApi] = useState([]);
   
    useEffect(() => {
        const url = `https://iman-xpress-backend-theta.vercel.app/api/blog/fetchblog`;
        axios.get(url)
            .then((res) => setBlogApi(res.data))
            .catch(error => console.log(error))
    }, [])

    return (

        <div className='blogContainer'>
            <title>IMan Xpress || Blog</title>
            <Container>
                <div>
                    <div className='moreBlogs'>
                        <h1 data-testid="blogTitle">From Blogs</h1>
                        <Link to="/moreBlogs">
                            <button className='allBlogsBtn'>
                                <p>Go To Blogs</p>
                                <i><i className="fas fa-arrow-right"></i></i>
                            </button>
                        </Link>
                    </div>
                    <Grid container spacing={2}>
                        {blogApi.slice(0, 3).map(blog => <Grid item xs={12} md={4} sm={6} key={blog._id}>
                            <Paper elevation={4}>
                                <div className='blogBox'>
                                    <div>
                                        <img src={blog.image} alt="Empty!" style={{ width: "100%", height: "200px" }} />
                                    </div>
                                    <div className='blogBoxContent'>
                                        <Link to={`/blogDetails/${blog._id}`}>
                                            <div className='blogTitle'>
                                                <span>{blog.title}</span>
                                                <li>{blog.time}</li>
                                            </div>
                                            <p>{blog.description.slice(0, 30)}</p>
                                        </Link>
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

export default Blogs;