import { Checkbox, FormControlLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Order = ({handleCheck}) => {
   
    return (
        <div>
          
            <TableContainer >
            <Typography  variant="h5" fontWeight="bold">YOUR ORDER</Typography>
      <Table sx={{ minWidth: 1 ,my:5}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold',fontSize:'18px'}}>PRODUCT</TableCell>
            <TableCell sx={{fontWeight:'bold',fontSize:'18px'}} align="right">SUBTOTAL</TableCell>           
           
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               "Product Name"
              </TableCell>
              <TableCell align="right">"$564"</TableCell>
              
            </TableRow>
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontWeight:'bold',fontSize:'16px'}} component="th" scope="row">
               Subtotal
              </TableCell>
              <TableCell align="right">"$564"</TableCell>
              
            </TableRow>
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  sx={{fontWeight:'bold',fontSize:'16px'}} component="th" scope="row">
               Shipping
              </TableCell>
              <TableCell align="right">"$56"</TableCell>
              
            </TableRow>
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  sx={{fontWeight:'bold',fontSize:'20px'}} component="th" scope="row">
               Total
              </TableCell>
              <TableCell  sx={{fontWeight:'bold',fontSize:'20px'}} align="right">"$556"</TableCell>
              
            </TableRow>
         
        </TableBody>
      </Table>
            </TableContainer>  
            <Box>
            SSL commerce
            </Box>
            <FormControlLabel sx={{my:2,textAlign:'left'}}
            control={
                <Checkbox onChange={handleCheck} />  
            }
            label="I have read and agree to the website terms and conditions *"
          />
           
        </div>
    );
};

export default Order;