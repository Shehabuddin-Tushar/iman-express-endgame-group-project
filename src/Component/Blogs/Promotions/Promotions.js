import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import { Grid, Paper } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Promotions = () => {
    const [blogApiThree, setBlogApiThree] = useState([])
    // const blogApiThree = [
    //     {
    //         id: 1,
    //         img: "https://i.ibb.co/ZXpjq5m/promotion-Pic-One.jpg",
    //         category: "Bangladesh",
    //         description: "You can enjoy Iman Xpress Points benefits from Nitol Electronics now!  ",
    //         date: "Feb 01, 2021"
    //     },
    //     {
    //         id: 2,
    //         img: "https://i.ibb.co/2MqVfdM/promotion-Pic-Two.jpg",
    //         category: "Newsroom",
    //         description: "Time for a home renovation! ",
    //         date: "Mar 4, 2022"
    //     }
    // ]

    useEffect(() => {
        const url = `http://localhost:8080/api/blog/fetchblogbycategory/promotion`;
        axios.get(url)
            .then((res) => setBlogApiThree(res.data))
            .catch(error => console.log(error))
    }, [])

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
                    {blogApiThree.map(blog => <Grid item xs={12} md={6} sm={12} key={blog._id}>
                        <Paper elevation={4}>
                            <div className='blogBox' >
                                <div>
                                    <img src={blog.image} alt="Empty!" style={{width:"100%", height: "200px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}/>
                                </div>
                                <div className='blogBoxContent'>
                                    <Link to={`/blogDetails/${blog._id}`} >
                                        <div className='blogTitle'>
                                            <span>{blog.title}</span>
                                            <li>{blog.time}</li>
                                        </div>
                                        <p>{blog.description}</p>
                                    </Link>
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