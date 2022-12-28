import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className='lg:w-[80vw] w-full border h-screen  fixed right-0 p-5 bg-slate-500 lg:flex flex-col justify-center items-center'>
            <div className='lg:w-[50%] rounded-md bg-white p-4'>
                <h1 className='text-xl font-semibold text-blue-600 font-serif text-center mb-5'>Register in SocioBook</h1>
                <form className='w-full p-2 flex flex-col gap-3'>
                    <input className='w-full px-2 py-1 border rounded' type="email" name="email" id="" placeholder='Your Email' />
                    <input className='w-full px-2 py-1 border rounded' type="password" name="password" id="" placeholder='Type Your password'/>
                    <p className='text-start text-lg'>Already have an account? <Link className='text-blue-400' to='/login'>Login</Link></p>

                    <input className='w-full px-2 py-1 rounded bg-blue-500 text-white text-xl font-serif cursor-pointer' type="submit" value="Register" />
                    
                </form>
            </div>
        </section>
    );
};

export default Register;