import { Button, Grid, TableCell, Typography } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Manageporduct() {

    

  return (
      <Box style={{padding:"20px",marginTop:"50px"}}>
          <title>Manage orders</title>
          <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                  <Typography variant="h4" sx={{ mb: 2 }}>Manage all orders</Typography>
                  <TableContainer component={Paper}>
                      <Table sx={{}} aria-label="customized table">
                          <TableHead>
                              <TableRow>
                                  <TableCell>Email</TableCell>
                                  <TableCell align="right">Product name</TableCell>
                                  <TableCell align="right">Product price</TableCell>
                                  <TableCell align="right">Status</TableCell>
                                  <TableCell align="center">Action</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              <ToastContainer />
                              
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
      </Box>
  )
}

export default Manageporduct