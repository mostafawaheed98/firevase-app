import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
    return (
        <>
            <Navbar />
            <div className='container mt-3'>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;