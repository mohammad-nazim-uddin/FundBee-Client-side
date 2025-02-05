import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/image/logo.png'
import { authContext } from '../AuthProvider/AuthProvider';
import auth from '../firebase/firebase.config';

const Navbar = () => {
    const { handleLogout } = useContext(authContext)
    const user = auth.currentUser;

    const links = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/allCampaign'><li><a>All Campaign</a></li></Link>
        <Link to='/addCampaign'><li><a>Add Campaign</a></li></Link>
        <Link to='/myCampaign'><li><a>My Campaign</a></li></Link>
        <Link to='/donation'><li><a>My Donation</a></li></Link>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center mx-auto my-auto '>
                        <svg className=' w-[50px] h-[50px]' >
                            <path class="cls-2" d="M44,22.19A21.48,21.48,0,1,1,22.56.71,21.48,21.48,0,0,1,44,22.19" id="background-circle"></path>
                            <g id="knockout-heart">
                                <path class="cls-3" d="M32.32,16.23c-2.58-2.52-8.52-2.41-12.24,1.32s-3.82,9.68-1.32,12.24h0l2,2,.11-.11a9.44,9.44,0,0,1,1.58-11.77,9.44,9.44,0,0,1,11.77-1.58l.11-.11-2-2Z"></path>
                                <path class="cls-3" d="M22.56.71A21.48,21.48,0,1,0,44,22.19,21.48,21.48,0,0,0,22.56.71ZM37.23,21.83s0,.11-.1.3-.14.37-.22.55A28.83,28.83,0,0,1,22.66,37.13v0l0,0,0,0v0A28.9,28.9,0,0,1,8.69,23.48a8.72,8.72,0,0,1,13.89-10.3,8.73,8.73,0,0,1,14.65,8.65Z"></path>
                            </g>
                        </svg>
                        {/* <img width='50' src={logo} alt="" /> */}
                        <a className="text-3xl font-bold">Fund<span className='text-[#5bcae8]'>Bee</span></a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {auth && auth.currentUser ? (
                        <div className="flex gap-2 items-center">
                            {/* Avatar with Tooltip */}
                            <div className="relative group">
                                <img
                                    src={auth.currentUser.photoURL}
                                    alt="User Avatar"
                                    className="rounded-full w-10 h-10"
                                />
                                {/* Tooltip */}
                                <div className="absolute top-10 left-0
                                w-[200px]
                                transform -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {auth.currentUser.displayName}
                                </div>
                            </div>

                            {/* Logout Button */}
                            <button onClick={handleLogout} className="btn">
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                    )}
                </div>


            </div>
            <div className='border-2 border-y-8 border-[#75c8e5] '>

            </div>
        </div>

    );
};

export default Navbar;