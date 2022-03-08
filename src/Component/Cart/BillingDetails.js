import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BillingDetails = ({register}) => {
    return (
        <div>
             <Box sx={{ p: 5, textAlign: "center" }}>
                                    <Typography variant="h5" fontWeight="bold">
                BILLING DETAILS
            </Typography>
            <Typography variant="body" >
              Provide details for buying easily.
            </Typography>
           </Box>
          <Box>
              <TextField
                  label="First Name"
                  required
                  sx={{ mt: 2, width: "100%" }}
                  variant="outlined"
                  {...register("fname")}
              />
              <TextField
                  label="Last name"
                  required
                  sx={{ mt: 2, width: "100%" }}
                  variant="outlined"
                  {...register("lname")}
              />
             <TextField
              required
              label="Street address "
              type="text"
              sx={{ mt: 2, width: "100%" }}
              variant="outlined"
              {...register("streetAddress")}
            />
              <TextField
                required
                label=" City"
                type="text"
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("city")}
              />
              <TextField
                required
                label="Postal Code "
                type="number"
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("postalCode")}
                  />
                  
                  
              <TextField
                  required
                  label="Phone"
                  type="number"
                  sx={{ mt: 2, width: "100%" }}
                  variant="outlined"
                  {...register("phone")}
              />
              <TextField
                  required
                  label="Email address "
                  type="email"
                  sx={{ my: 2, width: "100%" }}
                  variant="outlined"
                  {...register("email")}
                  />
              <TextField
                  
                  label="Order notes (optional)"
                  type="email"
                  sx={{ my: 2, width: "100%" }}
                                        variant="outlined"
                                        multiline
                                        rows={10}
                  {...register("note")}
                  />
       
          </Box>{" "}
 
        </div>
    );
};

export default BillingDetails;