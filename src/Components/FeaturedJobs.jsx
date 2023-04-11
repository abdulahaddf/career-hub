import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {
    const jobs = useLoaderData()
    const [sortedJobs, setSortedJobs] = useState([])
    // const [jobss, setJobss] = useState([])

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
    <div className="grid md:grid-cols-2 gap-12 my-5 w-11/12 mx-auto ">

      {sortedJobs.map((job) => (
            
          <div className="card w-3/4 mx-auto glass p-5">
          <figure>
            <img
              src={job.logo} alt="icon" className="w-64 md:w-9/12" />
          </figure>
          <div className="card-body">
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
                
              <Link to={`jobDetails/${job.id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      ))}
    </div>
    <div className="mx-auto w-fit">
    <button onClick={showAll} className="btn btn-primary">Show More</button>
    
    </div>

    </div>
  );
};

export default FeaturedJobs;
