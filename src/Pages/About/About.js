
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const About = () => {

   const [modal, setModal] = useState(false);
   const [profile, setProfile] = useState({});
   const [loader, setLoader] = useState(true);
   const {user} = useContext(AuthContext);

   useEffect(()=>{
    fetch(`https://sociobook-server.vercel.app/user?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setProfile(data.data)
    })
   },[user?.email, loader]);


   const onModalSubmit = (event) =>{
        event.preventDefault();
        setModal(false)
        const name = event.target.name.value;
        const address = event.target.address.value;
        const university = event.target.university.value;

        const profile = {
            name,address,university
        };

        fetch(`https://sociobook-server.vercel.app/user?email=${user?.email}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
        .then(res => res.json())
        .then(data => {
            setLoader(!loader)
        });

   }

    return (
        <section className='lg:w-[80vw] w-full  h-screen  fixed right-0 p-5 bg-slate-500 lg:flex flex-col justify-center items-center'>

           

            <div className='w-full lg:w-[60%] rounded-md bg-white p-8 pt-16 text-start flex flex-col gap-3 text-xl relative'>

               {/* modal active button  */}

                <label onClick={()=>setModal(true)} className='p-2 rounded-full bg-slate-400 absolute top-5 right-5 cursor-pointer' htmlFor="my-modal-3" ><AiOutlineEdit></AiOutlineEdit></label>

                {/* modal active button  */}
                <div className='border px-2 rounded'>
                    <p>Name:</p>
                    <p>{profile?.name}</p>
                </div>
                <div className='border px-2 rounded'>
                    <p>Email:</p>
                    <p>{profile?.email}</p>
                </div>
                <div className='border px-2 rounded'>
                    <p>University:</p>
                    <p>{profile?.university}</p>
                </div>
                <div className='border px-2 rounded'>
                    <p>Address:</p>
                    <p>{profile?.address}</p>
                </div>
            </div>
            

            {/* Modal data section start */}
            
            {
                modal && <>

                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={onModalSubmit} className='w-full p-4 flex flex-col gap-3 mt-5'>
                                <input className='w-full px-2 py-1 rounded border' type="text" name="name" defaultValue={profile?.name} />

                                <input className='w-full px-2 py-1 rounded border' type="email" name="email" defaultValue={profile?.email} disabled />

                                <input className='w-full px-2 py-1 rounded border' type="text" name="university"  defaultValue={profile?.university} />

                                <input className='w-full px-2 py-1 rounded border' type="text" name="address" defaultValue={profile?.address} />

                                <div className='w-full flex justify-end px-4'>
                                    <button className='bg-blue-500 rounded-md px-2 py-1' type="submit">Submit</button>
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