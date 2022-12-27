import React from 'react';
import { CiVideoOn } from 'react-icons/ci';
import { TiMessages } from 'react-icons/ti';
import { SiAboutdotme } from 'react-icons/si';

const NavbarSm = () => {
    return (
        <nav className='flex lg:hidden justify-between items-center px-5 py-3 shadow-md'>
           <h1 className='text-2xl font-extrabold text-blue-700'>SocioBook</h1>
           <div className='flex gap-2 text-lg font-sans'>
                <div title='Media' className='flex items-center bg-[#f8f9fa] p-3 rounded-full'><CiVideoOn className='inline text-xl'></CiVideoOn></div>

                <div title='Message' className='flex items-center bg-[#f8f9fa] p-3 rounded-full'><TiMessages className='inline text-xl'></TiMessages></div>

                <div title='About' className='flex items-center bg-[#f8f9fa] p-3 rounded-full'><SiAboutdotme className='inline text-xl'></SiAboutdotme></div>
           </div> 
        </nav>
    );
};

export default NavbarSm;