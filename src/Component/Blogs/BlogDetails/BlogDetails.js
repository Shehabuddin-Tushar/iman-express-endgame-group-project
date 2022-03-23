import { Container, Grid, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogDetailsData, setBlogDetailsData] = useState({})
  console.log("params data", id)
  useEffect(() => {
    const url = `https://iman-xpress.herokuapp.com/api/blog/fetchblog/${id}`;
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        setBlogDetailsData(res.data)
      })
      .catch(error => console.log(error))
  }, [id])

  return (
    <div>
      <Container className="blogDetailsContainer">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={6}>
            <div className="blogsHomeTitle-PartOne">
              <div>
                <h1>Iman Xpress Blog</h1>
                <p>Announcements, updates, releases, and more</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <div className="blogsHomeTitle-PartTwo">
              <img
                src="https://i.ibb.co/tcNrn3c/blog-Home-Pic-One-1.png"
                alt="Empty!"
                style={{ width: "300px", height: "200px" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container className="blogDetailsContainer">
        <Paper elevation={4}>
          <div className='blogBoxThree'>
            <div>
              <img src={blogDetailsData.image} alt="Empty!" style={{ width: "100%", height: "400px" }} />
            </div>
            <div className='blogBoxContent'>
              <div>
                <div className='blogTitle'>
                  <span>{blogDetailsData.title}</span>
                  <li>{blogDetailsData.time}</li>
                </div>
                <p>{blogDetailsData.description}</p>
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default BlogDetails;
