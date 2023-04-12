import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {
    const jobs = useLoaderData()
    const [sortedJobs, setSortedJobs] = useState([])
  

useEffect((() => {
    setSortedJobs(jobs.slice(0,4))
}
),[])
const showAll = () => {
setSortedJobs(jobs)
}
  return (
    <div className=" my-5 md:my-20">
    <div className="text-center">
    <h1 className="title ">Featured Jobs</h1>
    <p>
    Explore thousands of job opportunities with all the information you need. Its your future
    </p>
    </div>
    <div className="grid md:grid-cols-2 gap-3 md:gap-8 my-5 w-5/6 md:mt-16 mx-auto ">

      {sortedJobs.map((job) => (
            
          <div className="card w-3/4 mx-auto glass p-5" key={job.id}>
          <figure>
            <img
              src={job.logo} alt="icon" className="w-64 md:w-9/12" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">{job.jobTitle}</h2>
            <h4 className="text-xl font-bold">{job.companyName}</h4>
            <div className="md:flex  text-center">
                <div className="btn btn-outline btn-success btn-sm mx-1 my-2 rounded-md p-1 text-white">{job.jobType}</div>
                <div className="btn btn-outline btn-success btn-sm mx-1 my-2 rounded-md p-1 text-white">{job.employmentType}</div>
            </div>
            <div className="md:flex md:justify-between">
                <div className="flex"><img src="https://img.icons8.com/material-outlined/24/null/address.png"/>{job.location}</div>
                <div ><span className="font-medium">Salary: </span>{job.salaryRange}</div>
            </div>
                
              <Link to={`/${job.id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      ))}
    </div>
    <div className="mx-auto w-fit">
    <button onClick={showAll} className="btn btn-primary ">Show More</button>
    
    </div>

    </div>
  );
};

export default FeaturedJobs;
