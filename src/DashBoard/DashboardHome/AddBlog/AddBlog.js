import { Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddBlog.css';


const AddBlog = () => {

    const [description, setDescription] = useState('')
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
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

      



        const url = `https://iman-xpress.herokuapp.com/api/blog/addblog`;

        axios.post(url, data,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
               
                if (res.status == 200) {
                    toast.success("Blog inserted successfully");
                    return
                }

            })
            .catch(err => console.log(err))
        reset();

    }


    return (
        <div className='addBlogContainer'>
            <Container>
                <div className='addBlogTitle'>
                    <img src="https://i.ibb.co/pZsbPZj/IMan-Xpress.png" alt="Empty" />
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
                                            <input type="file" {...register("image", { required: true })} placeholder='Hosting img Link' />
                                        </div>
                                        <div>
                                            <input type="text" {...register("title", { required: true })} placeholder='Blog title' />
                                        </div>
                                        <select className='selectOption' {...register("category", { required: true })}>
                                            <option value="rider">Rider</option>
                                            <option value="marchent">Marchent</option>
                                            <option value="promotion">Promotion</option>
                                            <option value="aboutProduct">AboutProduct</option>
                                            <option value="newFeature">NewFeature</option>
                                        </select>
                                        <div>
                                            <input type="text" {...register("time", { required: true })} placeholder='Blog date' />
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
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_qy0z4GCjNErMYO_Ji7d17nRL-m3N2rFaeTcXUXxoW7lsDywbRq_QmPVAdTrw1izhok&usqp=CAU" alt='Empty' width="200px" />
                                            <div style={{ textAlign: "center" }}>
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

