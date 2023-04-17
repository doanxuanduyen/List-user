import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { setUsers } from "./userListSlice";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './css/style.css'


const columns = [
    {
        field: "username",
        headerName: "User name",
        width: 345,
        editable: false,
        
    },
    {
        field: "name",
        headerName: "Name",
        width: 345,
        editable: false,
    },
    {
        field: "email",
        headerName: "Email",
        width: 345,
        editable: false,
    },
    {
        field: "phone",
        headerName: "Phone",
        width: 345,
        editable: false,
    },
    {
        field: "website",
        headerName: "Website",
        width: 345,
        editable: false,
    },
    // {
    //     field: "address",
    //     headerName: "Address",
    //     width: 285,
    //     editable: false,
    // },
    // {
    //     field: "company",
    //     headerName: "Company",
    //     width: 285,
    //     editable: false,
    // },
];

export default function UserList() {
    const navigate = useNavigate();
    const handleClick = (params) => {
        navigate(`/detail/${params.id}`);
    };

    const dispatch = useDispatch();
    const data = useSelector(state => state.user) //lấy dữ liệu từ store 
    const [users, setUsers] = useState(data.listUser) //lưu trữ ds lấy được từ store 

    const fetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(() => setUsers(response.data)) //dispatch gửi action setUser với payload là response.data 
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <Box sx={{ height: 640, width: "100%", background: "white" }}>
            <DataGrid
                onRowClick={handleClick}
                disableClickEventBubbling
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
            />
        </Box>
    );
} 
