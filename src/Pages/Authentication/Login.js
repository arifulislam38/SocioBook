import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const {signIn, googleSignIn, setLoading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            setLoading(false);
            navigate(from, { replace: true });
        })
        .catch(err => console.log(err));
    };

    const googleLogIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            setLoading(false);
            navigate(from, { replace: true });
        })
        .catch(err => console.log(err))
    };


    return (
        <section className='lg:w-[80vw] w-full  h-screen  fixed right-0 p-5 bg-slate-500 lg:flex flex-col justify-center items-center'>
            <div className='lg:w-[50%] rounded-md bg-white p-4'>
                <h1 className='text-xl font-semibold text-blue-600 font-serif text-center mb-5'>Login to SocioBook</h1>
                <form onSubmit={handleLogin} className='w-full p-2 flex flex-col gap-3'>
                    <input className='w-full px-2 py-1 border rounded' type="email" name="email"  placeholder='Your Email' />
                    <input className='w-full px-2 py-1 border rounded' type="password" name="password"  placeholder='Type Your password'/>
                    <p className='text-start text-lg'>Dont have a account? <Link className='text-blue-400' to='/register'>Register</Link></p>
                    <input className='w-full px-2 py-1 rounded bg-blue-500 text-white text-xl font-serif cursor-pointer' type="submit" value="Login" />

                    <button onClick={googleLogIn} className='w-full px-2 py-1 rounded bg-blue-500 text-white text-xl font-serif cursor-pointer'> Login with Google </button>
                </form>
            </div>
        </section>
    );
};

export default Login;