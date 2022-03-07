import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Grid, Paper } from '@mui/material';
import axios from 'axios';
import "./Blogs.css"
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogApi, setBlogApi] = useState([]);
    // const blogApi = [
    //     {
    //         id: 1,
    //         img: "https://i.ibb.co/TYGPCH2/Food-delivery-boy-driving-scooter-with-box-with-food-and-wearing-mask.jpg",
    //         category: "Iman Rider",
    //         description: "Iman Xpress Send your cart to food update",
    //         date: "January 1, 2022"
    //     },
    //     {
    //         id: 2,
    //         img: "https://i.ibb.co/dt5Hmd5/Baked-chicken-wings-in-the-Asian-style-and-tomatoes-sauce-on-plate.jpg",
    //         category: "Iman Food",
    //         description: "Looking for all the burgers in Dhaka.",
    //         date: "January 4, 2022"
    //     },
    //     {
    //         id: 3,
    //         img: "https://i.ibb.co/wznDZgT/home-Blog-Pic-Three.jpg",
    //         category: "Iman Courier",
    //         description: "Iman Xpress Send courier now more affordable!",
    //         date: "January 9, 2022"
    //     }
    // ]
    // hosted img link 
    // https://ibb.co/4VbBwtc
    // https://ibb.co/7Q10kw1
    // https://ibb.co/9c0yMqg

    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/blog/fetchblog",  {
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    //     }).then((res)=> setBlogApi(res.data)).catch((err)=>console.log(err))
    //     }, [])
    
    useEffect(() => {
        const url = `http://localhost:8080/api/blog/fetchblog`;
        axios.get(url)
            .then((res) => setBlogApi(res.data))
            .catch(error => console.log(error))
    }, [])

    return (
       
        <div className='blogContainer'>
            <Container>
                <div>
                    <div className='moreBlogs'>
                        <h1>From Blogs</h1>
                        <Link to="/moreBlogs">
                            <button className='allBlogsBtn'>
                            <p>Go To Blogs</p>
                            <i><i class="fas fa-arrow-right"></i></i>
                            </button>
                        </Link>
                    </div>
                <Grid container spacing={2}>
                    {blogApi.slice(0, 3).map(blog => <Grid item xs={12} md={4} sm={6} key={blog._id}>
                        <Paper elevation={4}>
                            <div className='blogBox'>
                                <div>
                                    <img src={blog.image} alt="Empty!" style={{width:"100%", height: "200px"}}/>
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