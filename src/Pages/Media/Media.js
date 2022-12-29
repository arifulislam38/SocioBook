import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Media = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch(`https://sociobook-server.vercel.app/allposts`)
        .then(res => res.json())
        .then(data => setPosts(data.data))
    },[]);

    return (
        <section className='lg:w-[80vw] w-full border h-screen overflow-y-scroll fixed right-0 px-5 pb-24 pt-5 bg-slate-500 grid lg:grid-cols-3 gap-4 mb-30'>

            {
                posts?.map(post =>{
                    return <div className='bg-white rounded-md p-4 flex flex-col gap-3'>
                <div className='w-full flex gap-3 items-center'>
                        <img className='w-[50px] h-[50px] rounded-full bg-slate-400' src={post?.userPhoto} alt="" />
                        <div className='flex flex-col text-start'>
                            <span className='font-semibold'>{post?.userName}</span>
                            <span>{post?.date}</span>
                        </div>
                </div>
                    <p className='text-start'>{post?.text}</p>
                    <img className='rounded-md bg-slate-400 w-full h-[350px]' src={post?.image} alt="" />
                    <div className='flex justify-end w-full'>
                        <Link to={`/postdetails/${post?._id}`}><button className='px-2 py-1 rounded-md bg-blue-700'>See Details</button></Link>
                    </div>
            </div>
                })
            }
            
        </section>
    );
};

export default Media;