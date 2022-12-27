import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className='w-[25vw] h-screen border hidden lg:block md:flex sm:hidden'>
            <Link to='media'><button>Media</button></Link>
            <Link to='message'><button>Message</button></Link>
            <Link to='about'><button>About</button></Link>
        </aside>
    );
};

export default Sidebar;