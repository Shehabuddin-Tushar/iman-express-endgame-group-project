import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddBlog.css';

const AddBlog = () => {
    

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const onSubmit = async (data) => {
         console.log(data)
        let imageURL
        const imageData = new FormData();
        imageData.set("key", "06a916692ea087d185221539196ef3a5");
        imageData.append("image", data.image[0]);
        try {
            const res = await axios.post(
                "https://api.imgbb.com/1/upload",
                imageData
            );
            imageURL = res.data.data.display_url;
        } catch (error) {
            
            return alert("Failed to upload the image!");
        }

        data.image = imageURL

        console.log(data)



        const url = `https://iman-xpress.herokuapp.com/api/blog/addblog`;

        axios.post(url, data,
            {
              headers: {
                "Content-Type": "application/json"
              }
            }).then(res => {
              console.log(res)
              if (res.status==200) {
                    toast.success("Blog inserted successfully");
                    return
                }
              
            })
            .catch(err => console.log(err))
          reset();
        
    }
    
    // import { ToastContainer, toast } from 'react-toastify';

    // import 'react-toastify/dist/ReactToastify.css';
    // Shehabuddin
    // <ToastContainer />
    // Shehabuddin
    // Shehabuddin Tushar
    // console.log(res)
    //         if (res.status==200) {
    //           toast.success("product inserted successfully");
    //           return
    //         }
    
    

    // const handleData = async (event) => {
    //     event.preventDefault()
    //     // console.log(blogData)

    //     console.log(blogData)
    //     let imageURL
    //     const imageData = new FormData();
    //     imageData.set("key", "06a916692ea087d185221539196ef3a5");
    //     imageData.append("image", blogData.image);
    //     try {
    //         const res = await fetch(
    //             "https://api.imgbb.com/1/upload",
    //             {
    //                 method: 'POST',
    //                 header: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(imageData)
    //             }
    //         );
    //         imageURL = res.blogData.data.display_url;
    //     } catch (error) {
            
    //         return alert("Failed to upload the image!");
    //     }
    

    //     const blogDataApi = {
    //         title: blogData.title,
    //         description: blogData.description,
    //         image: imageURL,
    //         time: blogData.time
    //     };

    //     const url = `https://iman-xpress.herokuapp.com/api/blog/addblog`;
    //     fetch(url, {
    //         method: "POST",
    //         header: {
    //             'content-type': 'appplication/json'
    //         },
    //         body: JSON.stringify(blogData)

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })

    // }
    return (
        <div className='addBlogContainer'>
            <Container>
                <div className='addBlogTitle'>
                    <img src="https://i.ibb.co/pZsbPZj/IMan-Xpress.png" alt="Empty"/>
                </div>
                <div className="addBlogFrom">
                    <Paper elevation={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sm={6}>
                            <ToastContainer />
                            <div className='formPartTwo'>
                                <h1>Write YOur Blog</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <input type="file" {...register("image", { required: true })} placeholder='Hosting img Link'/>
                                    </div>
                                    <div>
                                        <input type="text" {...register("title", { required: true })} placeholder='Blog title'/>
                                    </div>
                                    <div>
                                        <input type="text" {...register("time", { required: true })} placeholder='Blog date'/> 
                                    </div>
                                    <textarea type="text" {...register("description", { required: true })} placeholder='Write description' ></textarea>
                                    <div>
                                        <button type="submit" className="addBlogBtn">Share Blog</button>
                                    </div>
                                </form>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>
                            <div className='formPartOne'>
                                <div>
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_qy0z4GCjNErMYO_Ji7d17nRL-m3N2rFaeTcXUXxoW7lsDywbRq_QmPVAdTrw1izhok&usqp=CAU" alt='Empty' width="200px"/>
                                        <div style={{textAlign: "center"}}>
                                            <Link to="/updateBlog"><button className='addBlogBtn'>Update Your Blog</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                    </Paper>
                </div>
            </Container>
        </div>
    );
};

export default AddBlog;

