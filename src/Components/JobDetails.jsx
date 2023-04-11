import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    // const jobs = useContext(jobs);
    // console.log(jobs);
    // const {id} = useParams()
    const jobs = useLoaderData();
    console.log(jobs);

    const { id, logo, companyName, jobTitle, jobType, employmentType, location, salaryRange, description, jobResponsibility, educationalRequirements, experience, contactInformation } = jobs;
    const { phone, email, address } = contactInformation;


    return (
      <div>
          <div className='bg-gray-100 '>
            <h1 className='text-5xl font-bold text-center h-32'>Job details</h1>
        </div>
        <div className='md:flex max-w-6xl mx-auto my-5 p-2 '>
            <div>
                <h1><span className='font-bold text-lg'>Job Description:</span>{description}</h1>
                <h1><span className='font-bold text-lg'>Job Responsibility:</span>{jobResponsibility}</h1>
                <h1><span className='font-bold text-lg'>Educational Requirements:</span>{educationalRequirements}</h1>
                <h1><span className='font-bold text-lg'>Experience:</span>{experience}</h1>
            </div>
            <div className='p-2 bg-cyan-100 rounded-md'>
                <div>
                <h1>Job Details</h1>
                <p>Salary:{salaryRange}</p>
                <p>Job Title:{jobTitle}</p>
                </div>
                <div>
                    <h1>Contact Information</h1>
                    <p>Phone:{phone}</p>
                    <p>Email:{email}</p>
                    <p>Address:{address}</p>
                </div>
            </div>
        </div>
      </div>
    );
};

export default JobDetails;