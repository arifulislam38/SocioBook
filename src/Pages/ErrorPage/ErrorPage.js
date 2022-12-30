import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='w-full h-screen flex justify-center items-center'>
            <div>
                <h1 className='lg:flex items-center gap-5'> <span className='text-[10vw]'>404</span> <span className='text-[5vw]'>Page not found</span></h1>
                <p>Back to home page <Link className='text-blue-600' to='/'>Click here</Link></p>
            </div>
        </section>
    );
};

export default ErrorPage;