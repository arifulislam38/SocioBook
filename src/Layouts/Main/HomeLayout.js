import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import NavbarSm from '../../Component/NavbarSm';
import Sidebar from '../../Component/Sidebar/Sidebar';

const HomeLayout = () => {
    return (
        <div className=' w-full h-full fixed top-0'>
            <Navbar></Navbar>
            <NavbarSm></NavbarSm>
            <section className='lg:flex md:flex w-full p-2 h-screen relative'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;