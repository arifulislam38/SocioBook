import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='hidden lg:flex justify-between items-center px-10'>
            <Link to='/'>Home</Link>
           this is large navbar
        </nav>
    );
};

export default Navbar;