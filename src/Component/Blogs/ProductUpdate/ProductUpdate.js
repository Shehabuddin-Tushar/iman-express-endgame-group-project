import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import { Grid, Paper } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductUpdate = () => {
    const [blogApiTwo, setBlogApiTwo] = useState([]) 
   

    useEffect(() => {
        const url = `https://iman-xpress.herokuapp.com/api/blog/fetchblogbycategory/aboutProduct`;
        axios.get(url)
            .then((res) => setBlogApiTwo(res.data))
            .catch(error => console.log(error))
    }, [])

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
                    {blogApiTwo.slice(0, 3).map(blog => <Grid item xs={12} md={4} sm={6} key={blog._id}>
                        <Paper elevation={4}>
                            <div className='blogBox'>
                                <div>
                                    <img src={blog.image} alt="Empty!" style={{width:"100%", height: "200px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}/>
                                </div>
                                <div className='blogBoxContent'>
                                    <Link to={`/blogDetails/${blog._id}`}>
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

export default ProductUpdate;