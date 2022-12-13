import React, { useEffect, useState } from 'react';
import { Container, Paper } from '@mui/material';
import { useForm } from "react-hook-form";
import "./UpdateBlog.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Box, width } from '@mui/system';

const UpdateBlog = () => {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const [description, setDescription] = useState('')
    const [blog, setBlog] = useState('')
    // blog id 
    const { blogId } = useParams()
    console.log(blogId)

    // fetch blog
    useEffect(() => {
        axios.get(`https://iman-xpress-backend-theta.vercel.app/api/blog/fetchblog/${blogId}`).then(res => {
            console.log(res.data);
            setBlog(res.data)

        }).catch(err => console.log(err))
    }, [blogId])

    const onSubmit = (data) => {
        data.description = description
        console.log(data)

        //update blog
        axios.put(`https://iman-xpress-backend-theta.vercel.app/api/blog/updateblog/${blogId}`, data).then(res => {
            console.log(res.data.success)
            if (res.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Blog Updated Successfully',
                });
                setBlog(res?.data)
            }
            // window.location.reload();


        }).catch(err => console.log(err))

    }
    return (
        <div className='updateBlogContainer'>
            <Container>
                <div style={{ textAlign: "center" }}>
                    <Paper elevation={6}>
                        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>Update Your Blog</h1>
                        <div className='UpdateFormPartOne'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    {/* <input type="file" {...register("image")} placeholder='Hosting img Link'/> */}
                                </div>
                                <div>
                                    <input type="text" {...register("title")}
                                        defaultValue={blog?.title}
                                        placeholder='Blog title' />

                                </div>
                                <div>
                                    <input type="text" {...register("time", { required: true })}
                                        defaultValue={blog?.date?.slice(0, 10)} placeholder='Blog date' />
                                </div>
                                {/* <textarea type="text" defaultValue={blog?.description} {...register("description", { required: true })} placeholder='Write description' ></textarea>       */}

                                <div style={{
                                    display: "flex",
                                    justifyContent: "center", alignItems: 'center'
                                }}>
                                    <Box >
                                        <CKEditor id="editor" sx={{
                                            display: "flex",
                                            justifyContent: "center"
                                        }}

                                            editor={ClassicEditor}
                                            data={blog?.description}
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor?.getData();
                                                console.log(data);
                                                setDescription(data)

                                            }}
                                        //  config={{ ckfinder:{
                                        //      uploadUrl: '/uploads'
                                        //                 }
                                        //                 }}

                                        // onBlur={ ( event, editor ) => {
                                        //     console.log( 'Blur.', editor );
                                        // } }
                                        // onFocus={ ( event, editor ) => {
                                        //     console.log( 'Focus.', editor );
                                        // } }
                                        />
                                    </Box> </div>
                                <button type="submit" className="addBlogBtn">Update Blog</button>

                            </form>
                        </div>
                    </Paper>
                </div>
            </Container>
        </div>
    );
};

export default UpdateBlog;