import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const AllMarchent = () => {
    const [marchent,setMarchent] = useState([]);

    fetch('http://localhost:8080/api/auth/getmerchantuser')
        .then(res=>res.json())
        .then(data=>setMarchent(data))

    return (
        <div>
             <Typography variant="h5" sx={{mt:5}}>
                Our All Marchent- {marchent.length}
            </Typography>
            <Table className='table' style={{marginTop:'15px'}}>
        <Thead className="thead">
                    <Tr>
                      <Th>Merchant ID</Th>
                      <Th>Merchant Name</Th>
                      <Th>Merchant Email</Th> 
                      <Th>Phone</Th>
                      <Th>Image</Th>                     
                      <Th>Category</Th>                                         
                    </Tr>
                  </Thead>
      <Tbody>
      {marchent.map(({name,email,password,_id,date,image,mobileNumber,category})=>(

<Tr key={_id} className="tableData">
<Td> {_id} </Td>
<Td> {name} </Td>
<Td>{email}</Td>
<Td>{mobileNumber}</Td>
<Td> <img src={image} alt="" width='150px' /> </Td>
<Td>{category}</Td>
</Tr>
))} 
      </Tbody>
    </Table>
        </div>
    );
};

export default AllMarchent;