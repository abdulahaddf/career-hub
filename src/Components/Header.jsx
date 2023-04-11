import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex mx-auto w-full text-center justify-evenly py-6 items-center bg-gray-100'>
            <div>
                {/* <h1 className='text-xl font-bold'>JobHunter</h1> */}
                <Link to="/" className='text-3xl font-bold'>JobHunter</Link>
            </div>
            <div className='text-xl font-semibold my-2'>
                <Link to="/statistics" className='mx-3'>Statistics</Link> 
                <Link to="/appliedJobs" className='mx-3'>Applied Jobs</Link> 
                <Link to="/blog" className='mx-3'>Blog</Link> 
            </div>
            <div>
                <button className='btn btn-primary'>
                    Start Applying
                </button>
            </div>
        </div>





    );
};

export default Header;