import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../Utils/fakeDb';

const JobDetails = () => {
    
    const jobs = useLoaderData();

    const { id, logo, companyName, jobTitle, jobType, employmentType, location, salaryRange, description, jobResponsibility, educationalRequirements, experience, contactInformation } = jobs;
    const { phone, email, address } = contactInformation;

    const haldleApplied = () => {
        localStorage.setItem(key='job', value='google')
    }


    return (
      <div>
          <div className='bg-gray-100 '>
            <h1 className='text-5xl font-bold text-center h-32'>Job details</h1>
        </div>
        <div className='md:flex max-w-6xl mx-auto my-5 p-2 '>
            <div className='leading-10'>
                <h1><span className='font-bold text-lg'>Job Description:</span>{description}</h1>
                <h1><span className='font-bold text-lg'>Job Responsibility:</span>{jobResponsibility}</h1>
                <h1><span className='font-bold text-lg'>Educational Requirements:</span>{educationalRequirements}</h1>
                <h1><span className='font-bold text-lg'>Experience:</span>{experience}</h1>
            </div>
            <div className='p-4 m-4 bg-cyan-200 rounded-md '>
                <div className='border-y-2 border-cyan-300 leading-8 py-2'>
                <h1 className='font-bold text-lg'>Job Details</h1>
                <p><span className='text-md font-semibold'>Salary: </span> {salaryRange}</p>
                <p> <span className='text-md font-semibold'>Job Title: </span>{jobTitle}</p>
                </div>
                <div className='my-3'>
                    <h1 className='font-bold text-lg my-2'>Contact Information</h1>
                    <p> <span className='text-md font-semibold'>Phone: </span>{phone}</p>
                    <p> <span className='text-md font-semibold'>Email: </span>{email}</p>
                    <p> <span className='text-md font-semibold'>Address: </span>{address}</p>
                </div>
                <div className='mx-auto w-fit'>
                <button onClick={() => addToDb(id)} className='btn btn-primary'>Apply Now</button>
                </div>
            </div>
        </div>
      </div>
    );
};

export default JobDetails;