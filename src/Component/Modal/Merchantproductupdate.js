import { Button, TextareaAutosize, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useForm, Controller } from "react-hook-form";
import  React, { useEffect,useState } from "react";

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

export default function Merchantproductupdate({ openModal, handleClose, merchantproduct, updateproduct }) {
  

    const [datafrommerchant, setDatafrommerchant] = useState({})
    const { handleSubmit, control,register} = useForm();
    useEffect(() => {
         setDatafrommerchant(merchantproduct)
        
    }, [merchantproduct._id])

   
   

    const onSubmit = data => {
        // data.id=merchantproduct._id
        console.log(data);
        updateproduct(data)
    }

    // const updatemerchantdata = (id) => {
    //     updateproduct(id)
    // }
    return (
        <>
            {
                datafrommerchant!=null? <Modal
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
                        <Box sx={style} >
                            <form onSubmit={handleSubmit(onSubmit)}>
                               
                                <Typography style={{ textAlign: "center", marginBottom: "15px", fontWeight: "bold" }} variant="h5">Update product data</Typography>
                                <Controller
                                    name="productname"

                                    defaultValue=""
                                    control={control}
                                    rules={{ required:'product name required' }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => <TextField value={datafrommerchant.productname} onChange={onChange} error={!!error} helperText={error ? error.message : null} style={{ width: "100%", marginBottom: "10px" }} label="product name" color="secondary" focused />}
                                />

                                <Controller
                                    name="productprice"
                                    defaultValue=""
                                    control={control}
                                    rules={{ required: 'product price required' }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => <TextField value={datafrommerchant.productprice} onChange={onChange} error={!!error} helperText={error ? error.message : null} style={{ width: "100%", marginBottom: "10px" }} label="product price" color="secondary" focused />}
                                />

                                <Controller
                                    name="productdescription"
                                    defaultValue=""
                                    control={control}
                                    rules={{ required: 'product description required' }}
                                    render={({ field: { onChange, value }, fieldState: { error }}) => <TextareaAutosize
                                        aria-label="minimum height"
                                        minRows={7}
                                       
                                        placeholder="product description"
                                        style={{ width: "100%", border: "2px solid #9d29b1", borderRadius: "4px" }}
                                        color="secondary"
                                        value={datafrommerchant.productdescription} 
                                        onChange={onChange}
                                        error={!!error} helperText={error ? error.message : null}
                                    />}
                                />





                                <img
                                    width="100px"
                                    style={{ borderRadius: "3px" }}
                                    src={merchantproduct.productimage}
                                    alt=""
                                /><br />
                                <input type="file"  {...register("productimage")} style={{ marginBottom: "15px" }} />
                                {/* <Typography id="transition-modal-title" variant="h6" component="h2">
                            Name: <span style={{ fontWeight: "bold" }}>{merchantproduct.productname}</span>
                        </Typography>

                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            price: <span style={{ color: "red" }}>{merchantproduct.productprice} TK</span>
                        </Typography>

                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Description: {merchantproduct.productdescription}
                        </Typography> */}

                                <Button type="submit" variant="outlined" style={{ width: "100%" }}>Update</Button>
                            </form>
                        </Box>
                    </Fade>
                </Modal>:""
            }
            
        </>
    );
}
