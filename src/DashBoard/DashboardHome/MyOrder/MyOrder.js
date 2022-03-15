import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const MyOrder = () => {
    const {user} = useAuth();
    console.log(user)
    const [myOrders,setMyOrders] = useState();
    useEffect(()=>{
        fetch(`http://localhost:8080/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMyOrders(data)
        })
    },[])
    return (
        <div>
           <div>
            <h4 className="text-warning fw-bold bg-dark p-2 rounded-3">My Orders  :{user.email}  </h4>
            <Table className="bg-dark text-light mx-auto mt-3">
                  <Thead className="thead">
                    <Tr>
                      <Th>Package Name</Th>
                      <Th>User Name</Th>
                      <Th>Booking Status</Th>
                      <Th>Address</Th>
                      <Th>Date</Th>
                      <Th>Contact Number</Th>
                      <Th>Delete Item</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                 

                {/* {myOrders.map(({packageName,userName,address,date,status,contact,_id})=>( */}

                <Tr key={'_id'} className="tableData">
                <Td> {'packageName'} </Td>
                <Td>{'userName'}</Td>
                <Td className="text-danger fw-bold">{'status'}</Td>
                <Td>{'address'}</Td>
                <Td>{'date'}</Td>
                <Td>{'contact'}</Td>
                {/* <Td><button className="btn btn-danger" onClick={()=>handleDelete(_id)}><RiDeleteBack2Fill/>

                </button></Td> */}
                </Tr>
                {/* ))}               */}
                  </Tbody>
                </Table>
        </div>
        </div>
    );
};

export default MyOrder;