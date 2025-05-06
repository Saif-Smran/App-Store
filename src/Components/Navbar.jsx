import React, { use } from 'react';
import logo from '../assets/Logo-2.png'
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, Logout } = use(AuthContext)

    console.log(user, 'user in navbar');

    const location = useLocation()

    const handleLogout = () => {
        Logout()
            .then(() => {
                alert('Logout successful')
                console.log('Logout successful')
            })
            .catch((error) => {
                alert('Logout error')
                console.error('Logout error:', error)
            })
    }

    const Links = <>
        <NavLink to='/' className='mr-4 btn btn-dash btn-primary text-lg'>Apps</NavLink>
        <NavLink to='/my-profile' className='mr-4 btn btn-dash btn-primary text-lg'>My Profile</NavLink>
        {/* <li className='mr-4 cursor-pointer'>Item 3</li> */}
    </>

    return (
        <div className=' popins bg-base-200'>
            <div className="navbar py-5 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="" className='w-15' />
                        <p className='text-xl font-bold'>Saif's App Store</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2 items-center">

                    {
                        user ? <>
                            <div className="avatar">
                                <div className="w-15 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <button onClick={handleLogout} className='btn btn-dash btn-secondary px-10'>Log Out</button>
                        </> :
                            <Link state={location.pathname} to='/auth/login' className='btn btn-dash btn-secondary text-lg'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;