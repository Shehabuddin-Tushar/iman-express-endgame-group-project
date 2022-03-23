import { Button, Grid } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import React,{useState,useEffect} from "react";


import './Userchatmodal.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "3px",
};

export default function Accountinformation({ openModal, handleClose,account}) {
 
  
 
  
  
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
      
        <Fade in={openModal}>
          <Box sx={style}>
            {
              account === "merchant" ?
                <>
                  <Grid sm={12}>
                    <Typography variant="h5" style={{ color: "green", fontWeight: "bold" }}>Here you can see merchant account open system</Typography>
                    
                    <ul className="ouraccouninformation">
                      <li>first go to navbar</li>
                      <li>Then click signup</li>
                      <li>Then click merchant account</li>
                      <li>fill up the all information field</li>
                      <li>Then click register button</li>
                      <li>Then go to login page</li>
                      <li>And login with your email and password and choose merchant radio button</li>
                    </ul>
                  </Grid>
                </> :
                account === "rider" ?
                  <Grid sm={12}>
                    <Typography variant="h5" style={{ color: "green", fontWeight: "bold" }}>Here you can see Rider account open system</Typography>

                    <ul className="ouraccouninformation">
                      <li>first go to navbar</li>
                      <li>Then click signup</li>
                      <li>Then click rider account</li>
                      <li>fill up the all information field</li>
                      <li>Then click register button</li>
                      <li>Then go to login page</li>
                      <li>And login with your email and password and choose rider radio button</li>
                    </ul>
                  </Grid> :
                  <Grid sm={12}>
                    <Typography variant="h5" style={{ color: "green", fontWeight: "bold" }}>Here you can see general user account open system</Typography>
                    <hr></hr>
                    <ul className="ouraccouninformation">
                      <li>first go to navbar</li>
                      
                      <li>Then click signup</li>
                      <li>Then click general account</li>
                      <li>fill up the all information field</li>
                      <li>Then click register button</li>
                      <li>Then go to login page</li>
                      <li>And login with your email and password and choose user radio button</li>
                    </ul>
                  </Grid>
            }
            
           
            
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
