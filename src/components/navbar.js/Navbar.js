import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    let activeStyle = "underline underline-offset-8";

    return (
        <div className="navbar bg-primary lg:justify-around">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-primary-content">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/reading-history'>History</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl font-semibold md:font-extrabold text-primary-content" to='/'>Tech Blog</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-primary-content">
                    <li><NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? activeStyle : null} to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? activeStyle : null} to='/reading-history'>History</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? activeStyle : null} to='/about'>About</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;