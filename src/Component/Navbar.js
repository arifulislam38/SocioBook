import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='hidden lg:flex justify-between items-center px-10 py-4 bg-white'>
            
           <div>
                <Link to='/'><h1 className='text-2xl font-extrabold text-blue-700'>SocioBook</h1></Link>
           </div>
           <div>
                <button>LogIn</button>
                <button>Logout</button>
           </div>
        </nav>
    );
};

export default Navbar;