import React, { useContext, useEffect, useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import {  useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PostDetails = () => {
    const [post, setPost] = useState({});
    const [loader, setLoader] = useState(true);

    const [load, setLoad] = useState(false);
    
    const {user} = useContext(AuthContext);

    const {id} = useParams();

    
    useEffect(()=>{
        setLoad(true)
        fetch(`https://sociobook-server.vercel.app/post/${id}`)
        .then(res =>res.json())
        .then(data => {
            setPost(data.data);
            setLoad(false);
        })
    },[loader,id]);
    
    

    const onLikeClick = () =>{
        fetch(`https://sociobook-server.vercel.app/like?email=${user?.email}&id=${post._id}`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setLoader(!loader)
        });
    };

    const onCommentSubmit = (event) =>{
        event.preventDefault();
        const comment = event.target.comment.value;
        const date = new Date().toLocaleDateString();
        const commentData = {
            user: user.email,
            userPhoto : user.photoURL,
            date,
            comment
        };
        fetch(`https://sociobook-server.vercel.app/comment?id=${post._id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentData)

        })
        .then(res => res.json())
        .then(data => {
            setLoader(!loader);
            event.target.reset();
        });
    };

    if(load){
        return <section className='lg:w-[80vw] w-full  h-screen overflow-y-scroll fixed right-0 px-5 pb-24 pt-5 bg-slate-500 flex justify-center  mb-30'>
            <span className="loader"></span>
        </section>
    }

    
    return (
        <section className='lg:w-[80vw] w-full  h-screen overflow-y-scroll fixed right-0 px-5 pb-24 pt-5 bg-slate-500 '>


            <div className='w-full rounded-md p-6 border flex flex-col gap-4  bg-white'>
                    <div className='w-full flex gap-3 items-center'>
                        <img className='w-[50px] h-[50px] rounded-full bg-slate-400' src={post.userPhoto} alt="" />
                        <div className='flex flex-col text-start'>
                            <span className='font-semibold'>{post.userName}</span>
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <p className='text-start'>{post.text}</p>
                    <img className='rounded-md bg-slate-400 w-full' src={post.image} alt="" />
                    
                        <div className='flex justify-between w-full'>
                            <p onClick={onLikeClick} className={`flex items-center gap-1 cursor-pointer`}>
                                <span className={`p-2 rounded-full bg-slate-400 text-xl ${post?.likes?.includes(user?.email)? 'bg-red-500' : 'bg-slate-400'}`}><BiLike></BiLike></span> 
                                <span>{post?.likes?.length} Like</span>
                            </p>

                            <p className='flex items-center gap-1'>
                                <span className='p-2 rounded-full bg-slate-400 text-xl'><FaRegComment></FaRegComment></span> 
                                <span>{post?.comments?.length} Comments</span>
                            </p>
                        </div>

                        <div className='w-full p-3 bg-slate-400 rounded-md'>
                            <h1 className='text-lg text-start'>Write your comments here</h1>
                            <form onSubmit={onCommentSubmit} className='lg:flex justify-between items-center  gap-4 w-full'>
                                <textarea className='border w-full lg:w-[85%] rounded-xl px-2 py-1' name="comment"  cols="40" rows="1"></textarea>
                                <button className='px-4 py-1 bg-blue-500 rounded-lg text-xl float-left lg:float-none mt-2 lg:mt-0' type="submit">Send</button>
                            </form>
                        </div>


                    {
                        post?.comments?.map((p,i) => {
                            return <div key={i} className='w-full'>
                                <div className='w-full flex gap-3 items-center'>
                                    <img className='w-[50px] h-[50px] rounded-full bg-slate-400' src={p?.userPhoto} alt="" />
                                    <div className='flex flex-col bg-slate-400 rounded-md px-2 text-start'>
                                        <span className='font-semibold text-start'>{p?.user}</span>
                                        <span>{p?.comment}</span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    
                </div>
        </section>
    );
};

export default PostDetails;