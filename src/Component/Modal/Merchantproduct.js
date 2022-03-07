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

export default function Merchantproduct({ openModal, handleClose, merchantproduct}) {

  
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
                        
                        <img
                            width="100%"
                            style={{ borderRadius: "3px" }}
                            src={merchantproduct.productimage}
                            alt=""
                        />
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Name: <span style={{ fontWeight:"bold" }}>{merchantproduct.productname}</span>
                        </Typography>

                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            price: <span style={{ color: "red" }}>{merchantproduct.productprice} TK</span> 
                        </Typography>

                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Description: {merchantproduct.productdescription}
                        </Typography>

                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
