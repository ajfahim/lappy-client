import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loading from '../../../components/shared/Loading/Loading';

const AllUsers = () => {


    const getUsers = async () => {
        const res = await axios.get("https://lappy-server.vercel.app/users");
        return res.data
    }
    const { data: users, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead className='text-center'>
                        <tr >
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Is Admin</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            users?.map(user => <tr key={user._id}>
                                <th>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={user.photoUrl} alt="" />
                                        </div>
                                    </div>
                                </th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {
                                        user.isAdmin === true ? "Admin" : ""
                                    }
                                </td>
                                <td>
                                    <button className='btn btn-xs btn-primary'>Make Admin</button>
                                    <button className='btn btn-xs btn-error ml-2'>Delete</button>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;