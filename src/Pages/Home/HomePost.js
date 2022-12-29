import React, { useContext, useEffect, useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const HomePost = () => {

    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch(`http://https://sociobook-server.vercel.app/posts`)
        .then(res => res.json())
        .then(data => setPosts(data.data))
    },[]);

    return (
        <section className='w-full mb-10 flex flex-col gap-5 pb-20'>

            {
                posts?.map(post => {
                    return <div className='w-full rounded-md p-6 border flex flex-col gap-4  bg-white'>
                    <div className='w-full flex gap-3 items-center'>
                        <img className='w-[50px] h-[50px] rounded-full bg-slate-400' src={post?.userPhoto} alt="" />
                        <div className='flex flex-col text-start'>
                            <span className='font-semibold'>{post?.userName}</span>
                            <span>{post?.date}</span>
                        </div>
                    </div>
                    <p className='text-start'>{post?.text}</p>
                    <img className='rounded-md bg-slate-400 w-full' src={post?.image} alt="" />
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <p className='flex items-center gap-1'>
                                <span className={`p-2 rounded-full bg-slate-400 text-xl ${post?.likes?.includes(user?.email)? 'bg-red-500' : 'bg-slate-400'}`}><BiLike></BiLike></span> 
                                <span>{post?.likes?.length} Like</span>
                            </p>

                            <p className='flex items-center gap-1'>
                                <span className='p-2 rounded-full bg-slate-400 text-xl'><FaRegComment></FaRegComment></span> 
                                <span>{post?.comments?.length} Comment</span>
                            </p>
                        </div>
                        <Link to={`/postdetails/${post._id}`}><button className='px-2 py-1 rounded-md bg-blue-700'>See Details</button></Link>
                    </div>
                </div>
                })
            }
              
            </section>
    );
};

export default HomePost;