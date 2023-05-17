import React from 'react';
import Header from '../Sheared/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='md:w-[85%] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;