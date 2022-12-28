import React from 'react';
import { MdOutlineCreate } from 'react-icons/md';
import { FcCamera } from 'react-icons/fc';
import { useForm } from 'react-hook-form';

const CreatePost = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const createPost = (data) =>{
        const message = data.message;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image);
        fetch(`https://api.imgbb.com/1/upload?key=dff193c18b03409189f3357e414ffb26`,{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imageData => {
            console.log(imageData)
        });
        // console.log(message, image)
    };

    return (
        <section className='mb-10 shadow-md rounded-lg w-full p-5 bg-white'>
                <div className='w-full flex items-center gap-3'><span className='p-3 rounded-full bg-[#f8f9fa] text-xl'><MdOutlineCreate></MdOutlineCreate></span> <p>Create Post</p></div>
                <form onSubmit={handleSubmit(createPost)} className='mt-3'>
                    <textarea className='w-full rounded-md border border-gray-400 px-3 py-2 text-black' {...register("message")} name="message" cols="30" rows="5" placeholder='Whats on your mind?'></textarea>
                    <div className='w-full flex justify-between items-center'>
                        <input type="file" {...register("image")} id="file" name="image" className='hidden'/>
                        <label for="file"><FcCamera className='text-2xl inline'></FcCamera> Photo/Video</label>
                        <button className='bg-blue-700 py-1 px-2 rounded-md text-white text-xl' type="submit">Create Post</button>
                    </div>
                </form>
            </section>
    );
};

export default CreatePost;