import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-evenly my-6 items-center'>
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