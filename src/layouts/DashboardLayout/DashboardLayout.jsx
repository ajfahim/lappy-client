import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Navbar from '../../components/shared/Navbar/Navbar';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';




const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    console.log("email: ", user.email)
    const [isAdmin] = useAdmin(user.email);
    const [isSeller] = useSeller(user.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side pt-5">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">Booked Laptops</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>

                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/add-laptop">Add Laptop</Link></li>
                                <li><Link to="/dashboard/my-laptops">My Laptops</Link></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;