import React, { useContext } from 'react';
import { CiVideoOn } from 'react-icons/ci';
import { TiMessages } from 'react-icons/ti';
import { SiAboutdotme } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const NavbarSm = () => {

    const {user,logOut,setLoading} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            setLoading(false);
            navigate('/')
        })
        .catch(err => console.log(err))
    };

    return (
        <nav className='flex lg:hidden justify-between items-center px-5 py-3 shadow-md bg-white w-full'>
           <Link to='/'><h1 className='text-2xl font-extrabold text-blue-700'>SocioBook</h1></Link>
           <div className='flex items-center gap-2 text-lg font-sans'>

                <Link to='media'><div title='Media' className='flex items-center bg-[#f8f9fa] p-3 rounded-full'><CiVideoOn className='inline text-xl'></CiVideoOn></div></Link>

                <Link to='message'><div title='Message' className='flex items-center bg-[#f8f9fa] p-3 rounded-full'><TiMessages className='inline text-xl'></TiMessages></div></Link>

                <Link to='about'><div title='About' className='flex items-center bg-[#f8f9fa] p-3 rounded-full'><SiAboutdotme className='inline text-xl'></SiAboutdotme></div></Link>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="bg-[#f8f9fa] p-3 rounded-full"><CgProfile className='inline text-xl'></CgProfile></label>

                    {
                        user ? <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-md w-auto mt-3 px-6">
                            <li onClick={handleLogOut}>LogOut</li>
                        </ul>
                        :
                        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-md w-auto mt-3 px-6">
                            <Link to='login'><li>Login</li></Link>
                            <Link to='register'><li>Register</li></Link>
                        </ul>
                    }

                    
                </div>

           </div> 
        </nav>
    );
};

export default NavbarSm;