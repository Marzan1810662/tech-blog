import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-2">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu w-80 py-4 text-primary-content bg-secondary">
                        {/* <!-- Sidebar content here --> */}
                        <li className='border-2 border-secondary-focus'><Link to='/dashboard/create-blog'>Create New Blog</Link></li>
                        <li className='border-2 border-secondary-focus'><Link to='/dashboard/all-blogs'>ALL Blogs</Link></li>
                    </ul>
                </div>
            </div>
    );
};

export default Dashboard;