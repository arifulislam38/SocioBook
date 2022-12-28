import React from 'react';
import { Link } from 'react-router-dom';


const Media = () => {
    return (
        <section className='lg:w-[80vw] w-full border h-screen overflow-y-scroll fixed right-0 px-5 pb-24 pt-5 bg-slate-500 grid lg:grid-cols-3 gap-4 mb-30'>
            
            <div className='bg-white rounded-md p-4 flex flex-col gap-3'>
                <div className='w-full flex gap-3 items-center'>
                        <img className='w-[50px] h-[50px] rounded-full bg-slate-400' src="" alt="" />
                        <p className='flex flex-col justify-center items-center'>
                            <span className='font-semibold'>Surfiya Jakir</span>
                            <span>22 min ago</span>
                        </p>
                </div>
                    <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil omnis rem molestiae, harum expedita laborum atque possimus aliquam.</p>
                    <img className='rounded-md bg-slate-400 w-full' src="logo192.png" alt="" />
                    <div className='flex justify-end w-full'>
                        
                        <Link to='/postdetails'><button className='px-2 py-1 rounded-md bg-blue-700'>See Details</button></Link>
                    </div>
            </div>


            <div className='bg-white rounded-md p-4 flex flex-col gap-3'>
                <div className='w-full flex gap-3 items-center'>
                        <img className='w-[50px] h-[50px] rounded-full bg-slate-400' src="" alt="" />
                        <p className='flex flex-col justify-center items-center'>
                            <span className='font-semibold'>Surfiya Jakir</span>
                            <span>22 min ago</span>
                        </p>
                </div>
                    <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil omnis rem molestiae, harum expedita laborum atque possimus aliquam.</p>
                    <img className='rounded-md bg-slate-400 w-full' src="logo192.png" alt="" />
                    <div className='flex justify-end w-full'>
                        
                        <button className='px-2 py-1 rounded-md bg-blue-700'>See Details</button>
                    </div>
            </div>
            
        </section>
    );
};

export default Media;