import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

const states = [
  {
    value: 'bikeRider',
    label: 'Bike Rider'
  },
  {
    value: 'foodDelivery',
    label: 'Food Delivery'
  },
  {
    value: 'medicineDelivery',
    label: 'Medicine Delivery'
  },
  {
    value: 'parcelDelivery',
    label: 'Parcel Delivery'
  },
];

export const AccountDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const [values, setValues] = useState("");
  
    // rider data fetch from local storage
        const rider = localStorage.getItem('riderInfo')
    const riderInfo = JSON.parse(rider)
    console.log(riderInfo);
    
    // submit
    const onSubmit = (data) => {
        console.log(data);
       
       
            axios.post(`http://localhost:8080/api/riderProfile/updateRider/${riderInfo.email}`, data).then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                  console.log(data);
                  Swal.fire({
                    icon: 'success',
                    title: 'Rider Profile Updated Successfully',
                  });
                }
                }).catch(err=>console.log(err))
        
    };
// handle rider state
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

   
  return (
    <form
      autoComplete="off"
      noValidate
       onSubmit={handleSubmit(onSubmit)}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"              
                required
                {...register("fname")}
                defaultValue={riderInfo.fname}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                helperText="Please specify the last name"
                required
                {...register("lname")}
                defaultValue={riderInfo.lname}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                {...register("email")}
                required
                defaultValue={riderInfo.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
              
                type="number"
                {...register("mobile")}
                required
                defaultValue={riderInfo.mobile}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                name="address"               
                required
                {...register("address")}
            
                defaultValue={riderInfo.address}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                              required
                            //   {...register("riderState")}
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
                      </Grid>
                    
                      
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button type='submit'
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
