import React from 'react';
import { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Typography } from '@mui/material';
import './AllOrders.css';
import axios from 'axios';
import { RiDeleteBin5Fill } from 'react-icons/ri';



const AllOrders = () => {
    const [allOrders,setAllOrders] = useState([]);
    useEffect(()=>{
        fetch(`https://iman-xpress.herokuapp.com/api/payNow/allorders`)
        .then(res=>res.json())
        .then(data=>{
            setAllOrders(data)
        })
    },[])

    const handleDelete=id=>{
      // Delete Confirmation     
      const confirmDelete=window.confirm('Are you sure ? to delete this order !')
      if(confirmDelete){
          // deleting product by id
          axios.delete(`https://iman-xpress.herokuapp.com/api/payNow/deleteorders/${id}`)
          .then(res =>{
            alert(res.data.success)   
            const presentOrder=allOrders.filter(book=> book._id !==id)
            setAllOrders(presentOrder)      
          })
          .catch(err=>console.log(err))         
      }
  }

    return (
      <div className='TotalOrder'>
        <Typography
     
        varient = 'h3'
        >
        Total Order: {allOrders.length}  
        </Typography> 
        <Table className='table' style={{marginTop:'15px'}}>
        <Thead className="thead">
                    <Tr>
                      <Th>Customer Name</Th>
                      <Th>Tran ID</Th>
                      <Th>Payment Status</Th> 
                      <Th>Total Amount</Th>
                      <Th>Contact Number</Th>
                      <Th>Date</Th>                                         
                      <Th>Delete Order</Th>
                    </Tr>
                  </Thead>
      <Tbody>
      {allOrders.map(({cus_name,tran_id,_id,payment_status,total_amount,cus_phone,date})=>(

<Tr key={_id} className="tableData">
<Td> {cus_name} </Td>
<Td>{tran_id}</Td>
<Td>{payment_status}</Td>
<Td>{total_amount} taka</Td>
<Td>{cus_phone}</Td>
<Td>{date}</Td>
<Td><button
style={{color:'#d50000', fontSize:'20px'}}
onClick={()=> handleDelete(_id)}
><RiDeleteBin5Fill/>
</button></Td>
</Tr>
))} 
      </Tbody>
    </Table>
      </div>
    )
    
};

export default AllOrders;

