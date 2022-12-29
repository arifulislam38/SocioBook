import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const TopSection = () => {
    return (
        <section className='grid grid-cols-3 lg:grid-cols-7 md:grid-cols-7 gap-1 w-full h-[25vh] lg:h-[30vh] mb-5'>
                <div className='border rounded-lg bg-[#343a40] relative flex'>
                    <div className=' absolute bottom-4 flex flex-col justify-center items-center w-full gap-1'>
                        <div className='bg-[#f8f9fa] p-3 rounded-full'>
                            <IoMdAdd></IoMdAdd>
                        </div>
                        <p className='text-white text-sm'>Add Story</p>
                    </div>
                </div>
                <div className='border rounded-lg bg-[#343a40] relative flex'>
                    <div className=' absolute bottom-4 flex flex-col justify-center items-center w-full gap-1'>
                        <div className='bg-[#f8f9fa] p-3 rounded-full'>
                            <IoMdAdd></IoMdAdd>
                        </div>
                        <p className='text-white text-sm'>Add Story</p>
                    </div>
                </div>
                <div className='border rounded-lg bg-[#343a40] relative flex'>
                    <div className=' absolute bottom-4 flex flex-col justify-center items-center w-full gap-1'>
                        <div className='bg-[#f8f9fa] p-3 rounded-full'>
                            <IoMdAdd></IoMdAdd>
                        </div>
                        <p className='text-white text-sm'>Add Story</p>
                    </div>
                </div>



                <div className='border rounded-lg bg-[#343a40] relative hidden lg:block md:block'>
                    <div className=' absolute bottom-4 flex flex-col justify-center items-center w-full gap-1'>
                        <div className='bg-[#f8f9fa] p-3 rounded-full'>
                            <IoMdAdd></IoMdAdd>
                        </div>
                        <p className='text-white text-sm'>Add Story</p>
                    </div>
                </div>
                <div className='border rounded-lg bg-[#343a40] relative hidden lg:block md:block'>
                    <div className=' absolute bottom-4 flex flex-col justify-center items-center w-full gap-1'>
                        <div className='bg-[#f8f9fa] p-3 rounded-full'>
                            <IoMdAdd></IoMdAdd>
                        </div>
                        <p className='text-white text-sm'>Add Story</p>
                    </div>
                </div>
                <div className='border rounded-lg bg-[#343a40] relative hidden lg:block md:block'>
                    <div className=' absolute bottom-4 flex flex-col justify-center items-center w-full gap-1'>
                        <div className='bg-[#f8f9fa] p-3 rounded-full'>
                            <IoMdAdd></IoMdAdd>
                        </div>
                        <p className='text-white text-sm'>Add Story</p>
                    </div>
                </div>
                <div className='border rounded-lg bg-[#343a40] relative hidden lg:block md:block'>
                    <div className=' absolute bottom-4 flex flex-col justify-center items-center w-full gap-1'>
                        <div className='bg-[#f8f9fa] p-3 rounded-full'>
                            <IoMdAdd></IoMdAdd>
                        </div>
                        <p className='text-white text-sm'>Add Story</p>
                    </div>
                </div>
            </section>
    );
};

export default TopSection;