import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const VerifyId = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="NID Number"
          required
          type="text"
          sx={{ mt: 2, width: "100%" }}
          variant="outlined"
          {...register("NID")}
        />
      </form>
    </div>
  );
};

export default VerifyId;
