import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const AllAdmin = () => {
    const [admins, setAdmins] = useState([]);

    fetch('https://iman-xpress.herokuapp.com/api/authgeneral/getalluserswithadmin')
        .then(res => res.json())
        .then(data => {
            setAdmins(data.allusers)
        })
    return (
        <div>
            <Typography variant="h5" sx={{ mt: 3 }}>
                Our All Admins {admins.length}
            </Typography>
            <Table className='table' style={{ marginTop: '15px' }}>
                <Thead className="thead">
                    <Tr>
                        <Th>Admin ID</Th>
                        <Th>Admin Name</Th>
                        <Th>Admin Email</Th>
                        <Th>Role</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {admins.map(({ name, email, _id, role }) => (

                        <Tr key={_id} className="tableData">
                            <Td> {_id} </Td>
                            <Td> {name} </Td>
                            <Td>{email}</Td>
                            <Td>{role}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
};

export default AllAdmin;
