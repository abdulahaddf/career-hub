import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SearchBox from "./SearchBox";


const AllJobs = () => {
    const jobs = useLoaderData();
   
  
   
  
    return (
        <div className=" my-5 md:my-10">
      <div className="text-center">
        <h1 className="title ">All Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
            <SearchBox></SearchBox> 
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-5 md:mt-16 mx-auto ">
        {jobs.map((job) => (
          <div className="card  mx-auto glass p-5" key={job.id}>
            <figure>
              <img src={job.logo} alt="icon" className="w-64 md:w-9/12" />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">{job.jobTitle}</h2>
              <h4 className="text-xl font-bold">{job.companyName}</h4>
              <div className="md:flex  text-center">
                <div className="btn btn-outline btn-success btn-sm mx-1 my-2 rounded-md p-1 text-white">
                  {job.jobType}
                </div>
                <div className="btn btn-outline btn-success btn-sm mx-1 my-2 rounded-md p-1 text-white">
                  {job.employmentType}
                </div>
              </div>
              <div className="md:flex md:justify-between">
                <div className="flex">
                  <img src="https://img.icons8.com/material-outlined/24/null/address.png" />
                  {job.location}
                </div>
                <div>
                  <span className="font-medium">Salary: </span>
                  {job.salaryRange}
                </div>
              </div>
              <Link to={`/${job.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
     
    </div>
    );
};

export default AllJobs;