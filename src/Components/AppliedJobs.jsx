import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../Utils/fakeDb';
import AppliedCarts from './AppliedCarts';
// import { getStoredCart } from './Utils/fakeDb';
// import AppliedJobCart from './AppliedJobCart';

const Appliedjobs = () => {
    const jobData = useLoaderData()
    console.log(jobData);
    let jobCart = [];
    const saveCart = getStoredCart();
    console.log('saved', saveCart);

    for (const id in saveCart) {
        const foundJob = jobData.find(job => job.id === id)
        if (foundJob) {
            jobCart.push(foundJob)
        }
    }
  console.log(jobCart);
    return (
        <div>  
            <h1 className='text-5xl font-bold text-center mb-24 h-32 bg-gray-100'>Your Applied Jobs</h1> 
            {
                jobCart.map(jobs=> <AppliedCarts job={jobs} key={jobs.id}></AppliedCarts>)
            }
        
        </div>
    );
};

export default Appliedjobs;