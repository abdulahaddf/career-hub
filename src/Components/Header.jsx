import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex mx-auto w-full text-center justify-evenly py-6 items-center bg-gray-100'>
            <div>
                {/* <h1 className='text-xl font-bold'>JobHunter</h1> */}
                <Link to="/" className='text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-teal-500 hover:to-teal-300 inline-block text-transparent bg-clip-text'>JobHunter</Link>
            </div>
            <div className='text-xl font-semibold my-2'>
                <Link to="/" className='mx-3'>Home</Link> 
                <Link to="/appliedJobs" className='mx-3'>Applied Jobs</Link> 
              
            </div>
            <div>
                <button className='btn btn-primary'>
                    Log In
                </button>
            </div>
        </div>





    );
};

export default Header;