import React from 'react';
import { Link } from 'react-router-dom';
import { CiVideoOn } from 'react-icons/ci';
import { TiMessages } from 'react-icons/ti';
import { SiAboutdotme } from 'react-icons/si';

const Sidebar = () => {
    return (
        <aside className='w-[20vw] h-screen  hidden lg:flex flex-col gap-3 md:flex sm:hidden fixed left-0 bg-slate-500 p-5'>
            
                <div className='rounded-md w-full bg-white flex flex-col gap-5 px-2 py-3'>
                    <p className='text-xl font-serif'> Navigation</p>
                    <Link to='media'><button className='flex items-center gap-3 text-xl'><span className='p-3 rounded-full text-xl bg-sky-700'><CiVideoOn></CiVideoOn></span> Media</button></Link>

                    <Link to='message'><button className='flex items-center gap-3 text-xl'><span className='p-3 rounded-full text-xl bg-orange-600'><TiMessages></TiMessages></span> Messages</button></Link>

                    <Link to='about'><button className='flex items-center gap-3 text-xl'><span className='p-3 rounded-full text-xl bg-green-500'><SiAboutdotme></SiAboutdotme></span> About</button></Link>
                </div>

                <div className='rounded-md w-full bg-white flex flex-col gap-5 px-2 py-3'>
                    <p className='text-xl font-serif'> More Pages</p>
                    <Link to='media'><button className='flex items-center gap-3 text-xl'><span className='p-3 rounded-full text-xl bg-sky-700'><CiVideoOn></CiVideoOn></span> Media</button></Link>

                    <Link to='message'><button className='flex items-center gap-3 text-xl'><span className='p-3 rounded-full text-xl bg-orange-600'><TiMessages></TiMessages></span> Messages</button></Link>

                    <Link to='about'><button className='flex items-center gap-3 text-xl'><span className='p-3 rounded-full text-xl bg-green-500'><SiAboutdotme></SiAboutdotme></span> About</button></Link>
                </div>
        </aside>
    );
};

export default Sidebar;