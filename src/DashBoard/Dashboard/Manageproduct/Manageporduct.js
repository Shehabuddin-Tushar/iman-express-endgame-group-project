import { Button, Grid, IconButton, TableCell, Typography } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import UpdateIcon from '@mui/icons-material/Update';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import Merchantproduct from '../../../Component/Modal/Merchantproduct';
import Merchantproductupdate from '../../../Component/Modal/Merchantproductupdate';
import { Link } from 'react-router-dom';

function Manageporduct() {

    const mytoken = (localStorage.getItem("merchant"))
    const [alldata, setAlldata] = useState([])
    const [merchantproductdata, setMerchantproductdata] = useState([])
    const [openinfoModal, setOpeninfoModal] = React.useState(false);
    const handleinfoOpen = () => setOpeninfoModal(true);
    const handleinfoClose = () => setOpeninfoModal(false);

    const [openupdateModal, setOpenupdateModal] = React.useState(false);
    const handleupdateOpen = () => setOpenupdateModal(true);
    const handleupdateClose = () => setOpenupdateModal(false);
    useEffect(() => {

        axios.get(`https://iman-xpress.herokuapp.com/api/merchant/fetchallproducts`, {
            headers: {
                "auth-token": mytoken,
                "Content-Type": "application/json"
            }
        }).then((res) => setAlldata(res.data)).catch((err) => console.log(err))
    }, [])

    const deleteproduct = (id) => {
        const confirmmessage = window.confirm("Are you sure you want to delete this product?")

        if (confirmmessage) {
            axios.delete(`https://iman-xpress.herokuapp.com/api/merchant/deleteproduct/${id}`, {
                headers: {
                    "auth-token": mytoken,
                    "Content-Type": "application/json"
                }
            }).then((res) => {

                const datas = alldata.filter(data => data._id !== id);
                setAlldata(datas)


            }).catch((err) => console.log(err))

            Swal.fire({
                icon: 'success',
                title: "Product deleted successfully",
            });
        }
    }


    const viewdata = (id) => {
        console.log(id)
        axios.get(`https://iman-xpress.herokuapp.com/api/merchant/fetchproduct/${id}`, {
            headers: {
                "auth-token": mytoken,
                "Content-Type": "application/json"
            }
        })
            .then((res) => setMerchantproductdata(res.data)).catch(err => console.log(err))
        handleinfoOpen()
    }

   

    return (
        <Box style={{ padding: "20px", marginTop: "50px" }}>
            <title>Manage products</title>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Manage products</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="customized table">
                            <TableHead>
                                <TableRow style={{ backgroundColor: "gray" }}>

                                    <TableCell align="left" style={{ color: "#fff" }}>Product image</TableCell>
                                    <TableCell align="left" style={{ color: "#fff" }}>Product name</TableCell>
                                    <TableCell align="left" style={{ color: "#fff" }}>product price</TableCell>
                                    <TableCell align="center" style={{ color: "#fff" }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <ToastContainer />
                                {
                                    alldata.map((data) => {
                                        return (
                                            <TableRow>

                                                <TableCell align="left"><img src={data.productimage} width="100px" /></TableCell>
                                                <TableCell align="left">{data.productname}</TableCell>
                                                <TableCell align="left">{data.productprice}</TableCell>
                                                <TableCell align="center">
                                                    <IconButton aria-label="delete" onClick={() => deleteproduct(data._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>

                                                    <IconButton color="secondary" aria-label="add an alarm" onClick={() => viewdata(data._id)}>
                                                        <RemoveRedEyeIcon />
                                                    </IconButton>
                                                    <Link to={`/dashboard/marchant/updateproduct/${data._id}`}>
                                                        <IconButton color="primary" aria-label="add to shopping cart" >
                                                            <UpdateIcon />
                                                        </IconButton>
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }

                                {/* onClick={() => updatedata(data._id)} */}
                                {/* <StyledTableRow key={product._id}>
                                              <StyledTableCell component="th" scope="row">{product.email}</StyledTableCell>
                                              <StyledTableCell align="right">{product.productdetails.name}</StyledTableCell>
                                              <StyledTableCell align="right">{product.productdetails.price}</StyledTableCell>
                                              <StyledTableCell align="right">{product.status}/{product.paymentdetails ? "paid" : "unpaid"}</StyledTableCell>
                                              <StyledTableCell align="center">
                                                  {product.status === "Pending" ?
                                                      <Button  variant="contained">Change status</Button> : <Button disabled variant="contained">Shipped</Button>
                                                  }
                                              </StyledTableCell>

                                          </StyledTableRow> */}





                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
            <Merchantproduct openModal={openinfoModal} handleClose={handleinfoClose} merchantproduct={merchantproductdata} />
            {/* <Merchantproductupdate openModal={openupdateModal} handleClose={handleupdateClose} merchantproduct={merchantproductdata} updateproduct={updateproduct} />  */}
        </Box>
    )
}

export default Manageporduct