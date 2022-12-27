import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import NavbarSm from '../../Component/NavbarSm';
import Sidebar from '../../Component/Sidebar/Sidebar';

const HomeLayout = () => {
    return (
        <div className='px-5'>
            <Navbar></Navbar>
            <NavbarSm></NavbarSm>
            <section className='lg:flex md:flex gap-5 w-full border p-2'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;