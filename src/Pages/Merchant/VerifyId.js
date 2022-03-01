import {TextField } from "@mui/material";
import React from "react";

const VerifyId = ({register}) => {
 
  return (
    <div>
      {" "}
      
        <TextField
          label="NID Number"
          required
          type="text"
          sx={{ mt: 2, width: "100%" }}
          variant="outlined"
          {...register("NID")}
        />
       
     
    </div>
  );
};

export default VerifyId;
