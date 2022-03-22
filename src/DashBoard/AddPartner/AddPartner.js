import { Container, Grid, Input, Paper,Button } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddPartner.css';
const AddPartner = () => {
    

    const { register, reset, handleSubmit } = useForm();

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

        console.log(data)



        const url = `https://iman-xpress.herokuapp.com/api/partner/addPartner`;

        axios.post(url, data,
            {
              headers: {
                "Content-Type": "application/json"
              }
            }).then(res => {
              console.log(res)
              if (res.status==200) {
                    toast.success("Image inserted successfully");
              

                    return
                }
              
            })
            .catch(err => console.log(err))
          reset();
        
    }
    
    return (
        <div>
            <Container>
                <div className="addBlogFrom">
                    <h2 style={{textAlign:'center'}}>Upload partners Image</h2>
                    <Paper elevation={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} sm={12}>
                            <ToastContainer />
                            <div className='formPartTwo'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Input style={{textAlign:'center'}} sx={{width:'800px'}} accept="image/*" type="file" {...register("image", { required: true })} placeholder='Partner Image'  /> <br />
                                    <Button sx={{mt:2}} variant="contained" type="submit" >
                                        Upload
                                    </Button>
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                    </Paper>
                </div>
            </Container>
        </div>
    );
};

export default AddPartner;

