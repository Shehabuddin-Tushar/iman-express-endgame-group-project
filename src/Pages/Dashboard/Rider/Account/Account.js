import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
  
const Account = () => {
    const { register, handleSubmit, reset } = useForm();
     const [image,setImage]= useState('{}')
    // rider data fetch from local storage
    const rider = localStorage.getItem('riderInfo')
    const riderInfo = JSON.parse(rider)
  
    // imageSelectHandle
    const imageSelectHandle = (e) => {
        const i = 'alfskla'
        setImage({selectedImage: e.target.image[0]})
        console.log(i,image)
    }
    const handleImageUpload = async (e) => {
        e.preventDefault()
       
        let imageURL
        const imageData = new FormData();
        console.log(imageData)
        // imageData.set("key", "06a916692ea087d185221539196ef3a5");
        imageData.append("image", image.selectedImage,image.selectedImage.name);
        // try {
        //     const res = await axios.post(
        //         "https://api.imgbb.com/1/upload",
        //         imageData
        //     );
        //     imageURL = res.data.data.display_url;
        // } catch (error) {
            
        //     return alert("Failed to upload the image!");
        // }
    
    }
    return (
        <div>
            <form  >  <Card >
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={''}
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
                    variant="h5"
                    fontWeight="bold"
          >
            {riderInfo.fname}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {`${riderInfo?.address} `}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {riderInfo.date}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
                <CardActions>
       <input type="file" multiple accept="image/*" onChange={imageSelectHandle}/>            
        <Button
          color="primary"
          fullWidth onClick={handleImageUpload}
                        variant="text"
                        type='submit'
        >
          Upload picture
                    </Button>
                   
      </CardActions>
            </Card>
           </form>
        </div>
    );
};

export default Account;


 

  
 
    // const productData = {
    //     name: data.name,
    //     description: data.description,
    //     price: data.price,
    //     image: imageURL,
    // }