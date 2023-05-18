import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import GoogleGit from './GoogleGit';

const Login = () => {
    useTitle("Login")
    const handelLoginform=()=>{

    }
    return (
        <div className='detbginlogin mb-10 rounded-lg'>
            <div className='mx-32 md:w-[40%] py-32  px-5'>
            <div className='border border-black px-9 py-2 rounded-md border-opacity-60'>
                <h5 className='text-2xl mt-2 font-bold'>Login</h5>
                <form onSubmit={handelLoginform} className='my-12'>
                    <input className='border-l-none border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black' type="email" required name='email' placeholder='Username or Email' />
                        <input className='border-l-none border-b-2 mt-10  rounded-md px-5  border-black border-opacity-5 py-3 outline-none w-full text-black' type="password" required name='password' placeholder='Passowrd' />
                    <div className='mt-5 flex items-center justify-between'>
                        <div>
                            <input type="checkbox" name="checkbox" id="" /> <span className='ml-2'>Remember me</span>
                        </div>
                        <div>
                            <Link className='underline text-yellow-500'> <p className='text-yellow-600'>Forgot Password</p></Link>
                        </div>

                    </div>
                    <button className='btn w-[100%] mx-auto btn-warning mt-10'>Login
                    </button>
                    <p className='text-center my-4'>Dont have an Account ? <Link className='underline text-yellow-600 ' to={'/signup'}>Create an account</Link> </p>
                </form>
            </div>
<GoogleGit></GoogleGit>
          </div>
        </div>
    );
};

export default Login;