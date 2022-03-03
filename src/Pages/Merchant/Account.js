import {
    Alert,
    Button,
    Container,
    Divider,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Account() {
  const { register, handleSubmit, reset ,formState: { errors }  } = useForm();
  const [mycategory, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const onSubmit =  async(data) => {
  
    
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
      data.image=imageURL
      axios.post('http://localhost:8080/api/auth/register', data).then(res => {
        console.log(res.data.authToken)
        if (res.data.authToken) {
          
          console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Merchant Registered Successfully',
          });
        }
      }).catch(err => console.log(err))
       reset()
    };
    return (
      <div>
      <Grid
         container
         sx={{
           height: "100vh",
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
         }}
      >
        <Grid
          item
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >  <Paper sx={{ p: 5 }} elevation={3}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ py: 5, textAlign: "center" }}>            {" "}             <Typography variant="h4" fontWeight="bold">
             Sign Up
            </Typography>
            <Typography variant="subtitle" >
              Start selling product using IMAN Xpress
            </Typography>
           </Box>
          <Box>
              <TextField
                  label="Store Name"
                  required
                  sx={{ mt: 2, width: "100%" }}
                  variant="outlined"
                  {...register("name")}
              />
             <TextField
              required
              label="Mobile Number"
              type="number"
              sx={{ mt: 2, width: "100%" }}
              variant="outlined"
              {...register("mobileNumber")}
            />
              <TextField
                required
                label="Store Address"
                type="text"
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("storeAddress")}
              />
              <TextField
                required
                label="Website/Facebook Page "
                type="text"
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("faceBookLink")}
                  />
                  
                  
              <TextField
                  required
                  label="email"
                  type="email"
                  sx={{ mt: 2, width: "100%" }}
                  variant="outlined"
                  {...register("email")}
              />
              <TextField
                  required
                  label="password"
                  type="password"
                  sx={{ my: 2, width: "100%" }}
                  variant="outlined"
                  {...register("password")}
                  />
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    required
                    style={{ width: "300px" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    {...register("category")}
                    value={mycategory}
                   onChange={handleChange}
                  >
                    <MenuItem value="resturant">Resturant</MenuItem>
                    <MenuItem value="medicine">Medicine</MenuItem>
                    <MenuItem value="supershop">Super shop</MenuItem>
                  </Select><br /><br />
                  <input type="file" {...register("image", { required: true })} />
                  <Typography>{errors.image && <span>This field is required</span>}</Typography>
          </Box>{" "}
          <Box sx={{ textAlign: "left", my: 3 }}>
              <Button variant="outlined" color="warning" type="submit">
                  Create Account
              </Button>
                </Box>
                
              </form>
              <Box sx={{ textAlign: "left", my: 3 }}>
                <Link to="/login">
                <Button variant="outlined" color="warning" type="submit">
                  Login
                  </Button>
                </Link>
              </Box></Paper>
            
            </Grid>
        </Grid>
    </div >
  )
}

export default Account