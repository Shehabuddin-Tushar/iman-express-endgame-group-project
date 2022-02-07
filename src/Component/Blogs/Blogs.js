import React from 'react';
import Container from '@mui/material/Container';
import { Grid, Paper } from '@mui/material';
import "./Blogs.css"

const Blogs = () => {
    const blogApi = [
        {
            id: 1,
            img: "https://pathao.com/bn/wp-content/uploads/sites/6/2021/06/AddToCart_Blog-348x224.png",
            category: "Iman Rider",
            description: "I something missing. Bolg artical",
            date: "January 1, 2022"
        },
        {
            id: 1,
            img: "https://pathao.com/bn/wp-content/uploads/sites/6/2021/06/I-_Pathao-Food_Rajdhanir-Shera_Rajdhanir-Shera-Burger_Blog-1-348x224.jpg",
            category: "Iman Food",
            description: "I something missing. Bolg artical",
            date: "January 4, 2022"
        },
        {
            id: 1,
            img: "https://pathao.com/bn/wp-content/uploads/sites/6/2021/06/Blog_Pathao-Courier_ঢাকার-পার্শ্ববর্তী-এলাকায়-ডেলিভারি-৮০-টাকায়-348x224.jpg",
            category: "Iman Courier",
            description: "I something missing. Bolg artical",
            date: "January 9, 2022"
        }
    ]
    return (
        <div className='blogContainer'>
            <Container>
                <div>
                    <div className='moreBlogs'>
                        <h1>More Blogs</h1>
                        <div>
                            <button className='allBlogsBtn'>
                            <p>Go Blogs</p>
                            <i><i class="fas fa-arrow-right"></i></i>
                            </button>
                        </div>
                    </div>
                <Grid container spacing={2}>
                    {blogApi.map(blog => <Grid item xs={12} md={4} sm={6} key={blog._id}>
                        <Paper elevation={12}>
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

export default Blogs;