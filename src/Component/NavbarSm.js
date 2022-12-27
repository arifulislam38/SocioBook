import React from 'react';
import { CiVideoOn } from 'react-icons/ci';
import { TiMessages } from 'react-icons/ti';
import { SiAboutdotme } from 'react-icons/si';
import { Link } from 'react-router-dom';

const NavbarSm = () => {
    return (
        <nav className='flex lg:hidden justify-between items-center px-5 py-3 shadow-md'>
           <Link to='/'><h1 className='text-2xl font-extrabold text-blue-700'>SocioBook</h1></Link>
           <div className='flex gap-2 text-lg font-sans'>

                <Link to='media'><div title='Media' className='flex items-center bg-[#f8f9fa] p-3 rounded-full'><CiVideoOn className='inline text-xl'></CiVideoOn></div></Link>

                <Link to='message'><div title='Message' className='flex items-center bg-[#f8f9fa] p-3 rounded-full'><TiMessages className='inline text-xl'></TiMessages></div></Link>

                <Link to='about'><div title='About' className='flex items-center bg-[#f8f9fa] p-3 rounded-full'><SiAboutdotme className='inline text-xl'></SiAboutdotme></div></Link>
           </div> 
        </nav>
    );
};

export default NavbarSm;