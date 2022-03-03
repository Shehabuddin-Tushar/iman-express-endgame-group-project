import React from 'react';
import { Container, Paper} from '@mui/material';
import "./UpdateBlog.css";

const UpdateBlog = () => {
    const handleData = () => {

    }
    const collectData = () => {
        
    }
    return (
        <div className='updateBlogContainer'>
            <Container>
                <div style={{textAlign: "center", background: "aquamarine"}}>
                <Paper sx={{width: "80%"}} elevation={6}>
                    <h1 style={{textAlign: "center", paddingTop: "20px"}}>Update your blog</h1>
                    <div className='UpdateFormPartOne'>
                        <form onSubmit={handleData}>
                            <div>
                                <input type="text" name='img' placeholder='Hosting img Link' onBlur={collectData}/>
                            </div>
                            <div>
                                <input type="text" name='category' placeholder='Blog title' onBlur={collectData}/>
                            </div>
                            <div>
                                <input type="text" name='date' placeholder='Blog date' onBlur={collectData}/> 
                            </div>
                            <textarea type="text" name='descrption' placeholder='Write description' onBlur={collectData} ></textarea>
                            <div>
                                <button type="submit" className="addBlogBtn">Share Blog</button>
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