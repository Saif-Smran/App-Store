import React, { use } from 'react';
import logo from '../assets/Logo-2.png'
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {

    const { user, Logout } = use(AuthContext)

    // console.log(user, 'user in navbar');

    const location = useLocation()

    const handleLogout = () => {
        Logout()
            .then(() => {
                toast.success('Logout successful')
                // console.log('Logout successful')
            })
            .catch((error) => {
                alert('Logout error')
                console.error('Logout error:', error)
            })
    }

    const Links = <>
        <NavLink to='/' className='mr-4 btn btn-dash btn-primary text-lg'>Apps</NavLink>
        <NavLink to='/my-profile' className='mr-4 btn btn-dash btn-primary text-lg'>My Profile</NavLink>
        <NavLink to='/blog' className='mr-4 btn btn-dash btn-primary text-lg'>Blog</NavLink>
        {/* <li className='mr-4 cursor-pointer'>Item 3</li> */}
    </>

    return (
        <div className='popins bg-base-200'>
            <div className="navbar py-5 w-11/12 mx-auto flex flex-wrap justify-between items-center">

                {/* Navbar Start: Logo + Dropdown */}
                <div className="flex items-center justify-between w-full lg:w-auto">
                    {/* Mobile Dropdown Button */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
                        >
                            {Links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="w-10 h-10 object-cover rounded" />
                        <p className="text-xl font-bold">Saif's App Store</p>
                    </div>
                </div>

                {/* Navbar Center: Desktop Links */}
                <div className="hidden lg:flex flex-1 justify-center mt-4 lg:mt-0">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {Links}
                    </ul>
                </div>

                {/* Navbar End: Auth Section */}
                <ToastContainer></ToastContainer>
                <div className="flex items-center gap-3 mt-4 lg:mt-0">
                    {user ? (
                        <>
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={user?.photoURL} alt="User Avatar" />
                                </div>
                            </div>
                            <button onClick={handleLogout} className="btn btn-secondary px-6">Log Out</button>
                        </>
                    ) : (
                        <Link
                            state={location.pathname}
                            to="/auth/login"
                            className="btn btn-secondary text-lg"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Navbar;