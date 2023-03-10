import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const {createUser, setLoading, updateUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleRegister = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const address = event.target.address.value;

        const profile = {
            name,
            email,
            password,
            university: 'University not found',
            address
        };

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            event.target.reset();
            fetch(`https://sociobook-server.vercel.app/createuser`,{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(profile)
            })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    const userInfo = {name}
                    updateUser(userInfo)
                    .then(() => {
                        navigate(from, { replace: true });
                        setLoading(false);
                    })
                    .catch(err => console.log(err));
                };
            })
            
        })
        .catch(err => console.log(err))
    };
    return (
        <section className='lg:w-[80vw] w-full  h-screen  fixed right-0 p-5 bg-slate-500 lg:flex flex-col justify-center items-center'>
            <div className='lg:w-[50%] rounded-md bg-white p-4'>
                <h1 className='text-xl font-semibold text-blue-600 font-serif text-center mb-5'>Register in SocioBook</h1>
                <form onSubmit={handleRegister} className='w-full p-2 flex flex-col gap-3'>

                    <input className='w-full px-2 py-1 border rounded' type="text" name="name" placeholder='Your Name' />

                    <input className='w-full px-2 py-1 border rounded' type="text" name="address" placeholder='Your address e.g, Chattogram' />

                    <input className='w-full px-2 py-1 border rounded' type="email" name="email" placeholder='Your Email' />
                    <input className='w-full px-2 py-1 border rounded' type="password" name="password" placeholder='Type Your password'/>
                    <p className='text-start text-lg'>Already have an account? <Link className='text-blue-400' to='/login'>Login</Link></p>

                    <input className='w-full px-2 py-1 rounded bg-blue-500 text-white text-xl font-serif cursor-pointer' type="submit" value="Register" />
                    
                </form>
            </div>
        </section>
    );
};

export default Register;