import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png'
import { FcBusinessman } from 'react-icons/fc'

const Navbar = () => {
    const menuItems = <>
        <li><Link className='rounded'>Home</Link></li>
        <li><Link className='rounded'>Categories</Link></li>
    </>
    return (
        <div className="border border-b-primary">
            <div className='navbar w-4/5 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className='flex items-center'>
                        <img src={logo} alt="lappy-logo" className='w-16' />
                        <Link className="btn btn-ghost normal-case text-xl">lappy</Link>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-50 rounded-full">
                                {/* <img alt='' src="https://placeimg.com/80/80/people" /> */}
                                <FcBusinessman size={40}></FcBusinessman>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link to='/register'>Register</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;