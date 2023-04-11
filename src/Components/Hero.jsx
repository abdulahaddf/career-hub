import React from 'react';

const Hero = () => {
    return (
        <div className='bg-gray-100 md:flex md:px-64 '>
        <div className='w-72 md:w-2/5 my-auto mx-auto m-0 md:ml-16 '>
            <h1 className='text-2xl md:text-5xl font-bold'>One Step Closer To Your <p className='text-cyan-500 my-2'>Dream Job</p></h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='btn btn-primary my-2'>Get Started</button>
        </div>
        <div><img src="/public/All Images/hero.png" className='w-64 md:w-96' alt="" /></div>
        
    </div>
    );
};

export default Hero;