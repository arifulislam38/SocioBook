import React from 'react';
import { BiLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';

const PostDetails = () => {
    return (
        <section className='lg:w-[80vw] w-full border h-screen overflow-y-scroll fixed right-0 px-5 pb-24 pt-5 bg-slate-500 '>


            <div className='w-full rounded-md p-6 border flex flex-col gap-4  bg-white'>
                    <div className='w-full flex gap-3 items-center'>
                        <img className='w-[50px] h-[50px] rounded-full bg-slate-400' src="" alt="" />
                        <p className='flex flex-col justify-center items-center'>
                            <span className='font-semibold'>Surfiya Jakir</span>
                            <span>22 min ago</span>
                        </p>
                    </div>
                    <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil omnis rem molestiae, harum expedita laborum atque possimus aliquam. In, deserunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil omnis rem molestiae, harum expedita laborum atque possimus aliquam. In, deserunt.</p>
                    <img className='rounded-md bg-slate-400 w-full' src="logo192.png" alt="" />
                    
                        <div className='flex justify-between w-full'>
                            <p className='flex items-center gap-1'>
                                <span className='p-2 rounded-full bg-slate-400 text-xl'><BiLike></BiLike></span> 
                                <span>Like</span>
                            </p>

                            <p className='flex items-center gap-1'>
                                <span className='p-2 rounded-full bg-slate-400 text-xl'><FaRegComment></FaRegComment></span> 
                                <span>Comment</span>
                            </p>
                        </div>
                    <div className='w-full flex gap-3 items-center'>
                        <img className='w-[50px] h-[50px] rounded-full bg-slate-400' src="" alt="" />
                        <p className='flex flex-col bg-slate-400 rounded-md px-2'>
                            <span className='font-semibold text-start'>Surfiya Jakir</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quis.</span>
                        </p>
                    </div>
                </div>
        </section>
    );
};

export default PostDetails;