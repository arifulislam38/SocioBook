import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const About = () => {

   const [modal, setModal] = useState(false);

    return (
        <section className='lg:w-[80vw] w-full border h-screen  fixed right-0 p-5 bg-slate-500 flex flex-col justify-center items-center'>

           

            <div className='w-full lg:w-[60%] rounded-md bg-white p-8 pt-16 text-start flex flex-col gap-3 text-xl relative'>

               {/* modal active button  */}

                <label onClick={()=>setModal(true)} className='p-2 rounded-full bg-slate-400 absolute top-5 right-5 cursor-pointer' htmlFor="my-modal-3" ><AiOutlineEdit></AiOutlineEdit></label>

                {/* modal active button  */}
                <div className='border px-2 rounded'>
                    <p>Name:</p>
                    <p>Ariful Islam</p>
                </div>
                <div className='border px-2 rounded'>
                    <p>Email:</p>
                    <p>mdariful@gmail.com</p>
                </div>
                <div className='border px-2 rounded'>
                    <p>University:</p>
                    <p>National University</p>
                </div>
                <div className='border px-2 rounded'>
                    <p>Address:</p>
                    <p>chittagong</p>
                </div>
            </div>
            

            {/* Modal data section start */}
            
            {
                modal && <>

                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form className='w-full p-4 flex flex-col gap-3 mt-5'>
                                <input className='w-full px-2 py-1 rounded border' type="text" name="name" id="" placeholder='your Name' />
                                <input className='w-full px-2 py-1 rounded border' type="email" name="email" id="" placeholder='Your email' />
                                <input className='w-full px-2 py-1 rounded border' type="text" name="university" id="" placeholder='university' />
                                <input className='w-full px-2 py-1 rounded border' type="text" name="address" id="" placeholder='address'/>
                                <div className='w-full flex justify-end px-4'>
                                    <button onClick={()=>setModal(false)} className='bg-blue-500 rounded-md px-2 py-1' type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            }
                
            

        </section>
    );
};

export default About;