import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <p>Dashboard</p>
            <aside>
                <p>Side bar</p>
            </aside>
            <Outlet/>
        </div>
    );
};

export default Dashboard;