import React from 'react';
import { Link } from 'react-router-dom';

const AppliedCarts = ({job}) => {
    // const { id, logo, companyName, jobTitle, jobType, employmentType, location, salaryRange, description, jobResponsibility, educationalRequirements, experience, contactInformation } = jobs;
    // const { phone, email, address } = contactInformation;
    return (
        <div className="card w-3/4 mx-auto glass p-5 flex">
              <div className="card-body">
          <figure>
            <img
              src={job.logo} alt="icon" className="w-2 md:w-9/12" />
          </figure>
            <h2 className="card-title ">{job.jobTitle}</h2>
            <h4 className="text-xl font-bold">{job.companyName}</h4>
            <div className="md:flex  text-center">
                <div className="border mx-1 my-2 md:my-0 border-cyan-500 bg-cyan-500 rounded-md p-1 text-white">{job.jobType}</div>
                <div className="border mx-1 border-cyan-500 bg-cyan-500 rounded-md p-1 text-white">{job.employmentType}</div>
            </div>
            <div className="md:flex md:justify-between">
                <div >{job.location}</div>
                <div >Salary:{job.salaryRange}</div>
            </div>
                
          </div>
              <div>
              <Link to={`jobDetails/${job.id}`} className="btn btn-primary">View Details</Link>
              </div>
        </div>
    );
};

export default AppliedCarts;