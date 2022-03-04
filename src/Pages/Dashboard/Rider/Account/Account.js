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

  // rider data fetch from local storage
  const rider = localStorage.getItem('riderInfo')
  const riderInfo = JSON.parse(rider)
  const [imageURL, setImageURL] = useState('')

  const onSubmit = async (data) => {
    console.log(data)

    const imageData = new FormData();
    imageData.set("key", "06a916692ea087d185221539196ef3a5");
    imageData.append("image", data.riderImage[0]);
    try {
      const res = await axios.post(
        "https://api.imgbb.com/1/upload",
        imageData
      );
      setImageURL(res.data.data.display_url)

    } catch (error) {

      return alert("Failed to upload the image!");
    }
    console.log(`${imageURL}`);
    console.log(data.riderImage, imageData)

    console.log(riderInfo.email)
    const image = imageURL.toString()
    console.log(image);
    // const mytoken = localStorage.getItem("riderToken")

    await axios.post(`https://iman-xpress.herokuapp.com/api/riderProfile/updateImage/${riderInfo?.email}`, 'image').then(res => {
      console.log(res)
      if (res.status === 200) {
        // toast.success("product inserted successfully");
        return
      }

    })
      .catch(err => console.log(err))
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >  <Card >
        <CardContent>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Avatar
              src={`${imageURL}`}
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
              {riderInfo?.fname}
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
              {riderInfo?.date}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>

          <Button
            color="primary"
            fullWidth
            variant="text"
            type='submit'
          >
            <input {...register("riderImage", { required: true })} type="file" multiple accept="image/*" />   Upload picture
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