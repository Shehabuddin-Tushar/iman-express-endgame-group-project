import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const AllUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://iman-xpress-backend-theta.vercel.app/api/authgeneral/getallusers`)
            .then(res => res.json())
            .then(data => {
                
                setUsers(data.allusers)
            })
    }, [])
    return (
        <div>
            <Typography variant="h5" sx={{ mt: 3 }}>
                Our All Users- {users.length}
            </Typography>
            <Table className='table' style={{ marginTop: '15px' }}>
                <Thead className="thead">
                    <Tr>
                        <Th>User ID</Th>
                        <Th>User Email</Th>
                        <Th>User Password</Th>
                        <Th>User Role</Th>
                        <Th>Date</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map(({ email, password, _id, date, role }) => (

                        <Tr key={_id} className="tableData">
                            <Td> {_id} </Td>
                            <Td>{email}</Td>
                            <Td>{password}</Td>
                            <Td>{role}</Td>
                            <Td>{date}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
};

export default AllUser;