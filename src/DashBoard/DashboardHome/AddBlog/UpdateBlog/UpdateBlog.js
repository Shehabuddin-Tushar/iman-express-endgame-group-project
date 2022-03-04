import React from 'react';
import { Container, Paper} from '@mui/material';
import { useForm } from "react-hook-form";
import "./UpdateBlog.css";

const UpdateBlog = () => {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = () => {
        
    }
    return (
        <div className='updateBlogContainer'>
            <Container>
                <div style={{textAlign: "center", background: "aquamarine"}}>
                <Paper sx={{width: "80%"}} elevation={6}>
                    <h1 style={{textAlign: "center", paddingTop: "20px"}}>Update your blog</h1>
                    <div className='UpdateFormPartOne'>
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
                            <button type="submit" className="addBlogBtn">Update Blog</button>
                        </div>
                    </form>
                    </div>
                </Paper>
                </div>
            </Container>
        </div>
    );
};

export default UpdateBlog;