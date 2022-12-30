import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user,logOut,setLoading} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            setLoading(false)
            navigate('/')
        })
        .catch(err => console.log(err))
    };
    return (
        <nav className='hidden lg:flex justify-between items-center px-10 py-4 bg-white'>
            
           <div>
                <Link to='/'><h1 className='text-2xl font-extrabold text-blue-700'>SocioBook</h1></Link>
           </div>
           <div className='flex gap-5'>
                {
                    user? <>
                        <button onClick={handleLogOut}>Logout</button>
                    </>
                    :
                    <>
                        <Link to='login'><button>LogIn</button></Link>
                        <Link to='register'><button>Register</button></Link>
                    </>
                }
           </div>
        </nav>
    );
};

export default Navbar;