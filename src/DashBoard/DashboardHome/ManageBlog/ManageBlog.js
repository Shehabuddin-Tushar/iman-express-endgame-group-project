import { Container, Grid, Paper } from '@mui/material';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./ManageBlog.css";

const ManageBlog = () => {
    const [blogApi, setBlogApi] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/api/blog/fetchblog`,  {
        headers: {
            "Content-Type": "application/json"
        }
        }).then((res)=> setBlogApi(res.data)).catch((err)=>console.log(err))
        }, [])

    // console.log("blogData", blogApi)

    // handle delete btn 
    const handleDltBtn = id => {
        const confirmMsg = window.confirm("Would you like to delete this blog")
        if(confirmMsg){
            console.log(id)
            axios.delete(`https://iman-xpress.herokuapp.com/api/blog/deleteblog/${id}`,  {
            headers: {
                "Content-Type": "application/json"
            }
            }).then((res)=> {
                console.log("deletedCount",res.data.deletedCount)
                console.log(res.data)
                const withOutDeletedBlog = blogApi.filter(blog => blog._id !== id)
                setBlogApi(withOutDeletedBlog)
                alert("Blog delete successfully!")

            }).catch((err)=>console.log(err))
        }else{
            alert("Don't wrroy you blog is safe now");
        }

    }
    return (
        <div className='blogContainer'>
            <Container>
                <div>
                    <div className='moreBlogs'>
                        <h1>Manage Blog</h1>
                        <Link to="/moreBlogs">
                            <button className='allBlogsBtn'>
                            <p>Home</p>
                            <i><i class="fas fa-arrow-right"></i></i>
                            </button>
                        </Link>
                    </div>
                <Grid container spacing={2}>
                    {blogApi.map(blog => <Grid item xs={12} md={6} sm={6} key={blog._id}>
                        <Paper elevation={4}>
                            <div className='blogBox'>
                                <div>
                                    <img src={blog.image} alt="Empty!" style={{width:"100%", height: "200px"}}/>
                                </div>
                                <div className='blogBoxContent'>
                                    <div>
                                        <div className='blogTitle'>
                                            <span>{blog.title}</span>
                                            <li>{blog.time}</li>
                                        </div>
                                        <p>{blog.description.slice(0, 40)}</p>
                                        <div className="blogTitle">
                                            <Link to={`/dashboard/updateBlog/${blog._id}`}><button className='editBtn'><i className="fa-solid fa-pen-clip"></i> Edit</button></Link>
                                            <button className='deleteBtn' onClick={() => handleDltBtn(blog._id)}><i className="fa-solid fa-trash-can-xmark"></i> Delete</button>
                                        </div>
                                    </div>
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

export default ManageBlog;