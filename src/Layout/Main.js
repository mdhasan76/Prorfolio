import React from 'react';
import Header from '../shered/Header';
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;