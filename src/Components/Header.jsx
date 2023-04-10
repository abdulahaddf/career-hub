import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex mx-auto justify-evenly py-6 items-center bg-gray-100'>
            <div>
                <h1 className='text-xl font-bold'>JobHunter</h1>
            </div>
            <div className='text-xl font-semibold'>
                <Link className='mx-3'>Statistics</Link> 
                <Link className='mx-3'>Applied Jobs</Link> 
                <Link className='mx-3'>Blog</Link> 
            </div>
            <div>
                <button className='btn-primary'>
                    Start Applying
                </button>
            </div>
        </div>
    );
};

export default Header;