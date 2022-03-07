import {
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


const CreateStore = ({register}) => {
 

  return (
    <div>
      <Grid
        container
        sx={{
          // height: "100vh",
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
        >
         
            <Box>  <TextField
                label="Owner’s Name"
                required
                type="text"
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("ownersName")}
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
                type="number"
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("storeAddress")}
              />
              <TextField
                required
                label="Website/Facebook Page "
                type="text"
                sx={{ my: 2, width: "100%" }}
                variant="outlined"
                {...register("link ")}
              />
            </Box>{" "}
            <Box sx={{ textAlign: "left", my: 3 }}>
              <Button variant="outlined" color="warning" type="submit">
                Create Store
              </Button>
            </Box>
         
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateStore;
