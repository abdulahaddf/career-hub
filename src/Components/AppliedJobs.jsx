import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobs =useLoaderData();
    console.log(jobs);
    
    return (
        <div>
            <h1 className="text-5xl font-bold text-center bg-gray-100 h-32">Applied Jobs</h1>
        </div>
    );
};

export default AppliedJobs;