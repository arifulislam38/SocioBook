import React, { useContext, useState } from 'react';
import { MdOutlineCreate } from 'react-icons/md';
import { FcCamera } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const createPost = (data) =>{
        const message = data.message;
        const image = data.image[0];
        const date = new Date().toLocaleDateString();
        const formData = new FormData();
        formData.append('image',image);
        fetch(`https://api.imgbb.com/1/upload?key=dff193c18b03409189f3357e414ffb26`,{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imageData => {
            // console.log(imageData)
            if(imageData.success){
                const post = {
                email : user?.email,
                userName: user.displayName || 'Default User',
                userPhoto: user.photoURL,
                date,
                text: message,
                image: imageData.data.url,
                likes: [],
                comments: []
                };
                
                fetch(`http://localhost:5000/createpost`,{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(post)
                })
                .then(res=> res.json())
                .then(data => {
                    if(data.success){
                        toast.success('successfully create post');
                        navigate('/media');
                    }
                })
            }
        });
    };

    return (
        <section className='mb-5 shadow-md rounded-lg w-full p-5 bg-white'>
                <div className='w-full flex items-center gap-3'><span className='p-3 rounded-full bg-[#f8f9fa] text-xl'><MdOutlineCreate></MdOutlineCreate></span> <p>Create Post</p></div>
                <form onSubmit={handleSubmit(createPost)} className='mt-3'>
                    <textarea className='w-full rounded-md border border-gray-400 px-3 py-2 text-black' {...register("message")} name="message" cols="30" rows="4" placeholder='Whats on your mind?'></textarea>
                    <div className='w-full flex justify-between items-center'>
                        <input type="file" {...register("image",{ required: false })} id="file" name="image" className='hidden'/>
                        <label for="file"><FcCamera className='text-2xl inline'></FcCamera> Photo/Video</label>
                        <button className={`bg-blue-500 py-1 px-2 rounded-md text-white text-xl`} type="submit" >Create Post</button>
                    </div>
                </form>
            </section>
    );
};

export default CreatePost;