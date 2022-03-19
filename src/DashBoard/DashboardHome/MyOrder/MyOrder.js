import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useState, useEffect } from 'react';
import './MyOrder.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Typography } from '@mui/material';



const MyOrder = () => {
    const {user} = useAuth();
    const [myOrders,setMyOrders] = useState([]);
    useEffect(()=>{
        fetch(`https://iman-xpress.herokuapp.com/api/payNow/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMyOrders(data)
        })
    },[])

    return (
      <div     className='TotalOrder'>
         <Typography
        varient = 'body1'
        color = '#795548'
        >
        Total Order: {myOrders.length}  
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
                    </Tr>
                  </Thead>
      <Tbody>
      {myOrders.map(({cus_name,tran_id,_id,payment_status,total_amount,cus_phone,date})=>(

<Tr key={_id} className="tableData">
<Td> {cus_name} </Td>
<Td>{tran_id}</Td>
<Td>{payment_status}</Td>
<Td>BDT:{total_amount}</Td>
<Td>{cus_phone}</Td>
<Td>{date}</Td>
</Tr>
))} 
      </Tbody>
    </Table>
      </div>
    )
    
};

export default MyOrder;

