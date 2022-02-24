import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

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

export default function ProductModal({ openModal, handleClose }) {
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Address
            </Typography>
            <img
              width="100%"
              style={{ borderRadius: "3px" }}
              src="https://www.foodbusinessnews.net/ext/resources/2020/4/CoupleAtRestaurant_Lead.jpg?t=1587991293&width=1080"
              alt=""
            />
            <Typography>All what shore what and this door this, maiden only at sorrow meant and lenore, my maiden off here entrance door the, velvet before lie above the just my sinking.</Typography>
            <Box sx={{ textAlign: "right" }}>
              <Button variant="contained" sx={{ bgcolor: red[500], mt: 1 }}>
                see other restauant
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
