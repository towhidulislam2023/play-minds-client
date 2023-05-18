import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleGit = () => {
    const handelLoginByGoogle=()=>{

    }
    return (
        <div>
            <hr className='border mt-5 border-gray-400  mx-auto' />
            <button onClick={handelLoginByGoogle} className='btn flex w-[100%] mx-auto bg-transparent mt-5 text-black hover:bg-transparent'>
                <span className=''><FaGoogle className='text-blue-600 text-2xl '></FaGoogle></span>  <span className='flex-grow'>Continue with Google </span>
            </button>
        </div>
    );
};

export default GoogleGit;