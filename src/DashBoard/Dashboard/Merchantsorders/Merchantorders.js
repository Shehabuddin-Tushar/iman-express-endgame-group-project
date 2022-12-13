import React,{useEffect,useState} from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography } from '@mui/material';
import Pagination from '../Pagination/Pagination'
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



function Merchantorders() {
    const [orders, setOrders] = useState([])
    const [currentpage, setCurrentpage] = useState(1);
    const [postperpage, setPostperpage] = useState(10);

    useEffect(() => {

        const merchant = localStorage.getItem("merchant");
        const merchantinfo = JSON.parse(localStorage.getItem("merchantInfo"));

        axios.get(`https://iman-xpress-backend-theta.vercel.app/api/payNow/getordersbymerchantid/${merchantinfo._id}`)
        .then(res=>{
            
            setOrders(res.data)

             }
             ).catch(err=>console.log(err))

    }, [])
    
    let indexoflastpost = currentpage * postperpage;
    let indexoffirstpost = indexoflastpost - postperpage;
    let currentorders = orders.slice(indexoffirstpost, indexoflastpost)

    let paginate = (pagenumber) => {
        setCurrentpage(pagenumber)
    }
  return (
      <>
          <Container style={{ marginTop: "50px",marginBottom:"50px" }}>
              <Typography variant="h4" style={{ marginTop: "20px",marginBottom:"20px" }}>Manage orders</Typography>
              <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                          <TableRow>
                              <StyledTableCell>Serial</StyledTableCell>
                              <StyledTableCell align="right">payment status</StyledTableCell>
                              <StyledTableCell align="right">Total amount</StyledTableCell>
                              <StyledTableCell align="right">Email</StyledTableCell>
                              <StyledTableCell align="right">phone</StyledTableCell>
                              <StyledTableCell align="right">product</StyledTableCell>
                              <StyledTableCell align="right">Address</StyledTableCell>
                              <StyledTableCell align="right">status</StyledTableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {
                              currentorders.map((el,index) => {
                                  return (
                                      <StyledTableRow key={el._id}>
                                          <StyledTableCell component="th" scope="row">
                                              {index+1}
                                          </StyledTableCell>
                                          <StyledTableCell align="right">{el.payment_status}</StyledTableCell>
                                          <StyledTableCell align="right">{el.total_amount} Tk</StyledTableCell>
                                          <StyledTableCell align="right">{el.cus_email}</StyledTableCell>
                                          <StyledTableCell align="right">{ el.cus_phone}</StyledTableCell>
                                          <StyledTableCell align="right">{
                                              JSON.parse(el.product_details[0]).map(myel => {
                                                  return (
                                                      < >
                                                          <span>{myel.productname} </span> ,
                                                          {/* <img src={ myel.productimage} height="50px" width="50px"/> */}
                                                      </>

                                                  )
                                              })
                                          }</StyledTableCell>
                                          <StyledTableCell align="right">{ el.streetAddress}</StyledTableCell>
                                          <StyledTableCell align="right">
                                              <Button variant="outlined">Pending</Button>
                                          </StyledTableCell>
                                      </StyledTableRow>
                                  )
                              })
                         }


                      </TableBody>
                  </Table>
              </TableContainer>
              <Pagination totalpost={orders.length} Postperpage={postperpage} paginate={paginate} /> 
          </Container>

      </>
  )
}

export default Merchantorders