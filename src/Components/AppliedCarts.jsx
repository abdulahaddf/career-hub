import React from "react";
import { Link } from "react-router-dom";

const AppliedCarts = ({ job }) => {

  return (
    <div className="card w-3/4 mx-auto glass p-6 flex my-5 shadow-xl">
      <div className="md:flex md:items-center ">
        <div>
          <img src={job.logo} alt="icon" className="w-24 md:w-56" />
        </div>

        <div className="md:flex md:justify-between md:ml-10 items-center">
          <div className="md:w-80 md:mr-52">
            <div>
              <h2 className="card-title ">{job.jobTitle}</h2>
              <h4 className="text-xl font-bold">{job.companyName}</h4>
            </div>
            <div className="md:flex  text-center">
              <div className="btn btn-outline btn-success btn-sm mx-1 my-2 rounded-md p-1 text-white">
                {job.jobType}
              </div>
              <div className="btn btn-outline btn-success btn-sm mx-1 my-2 rounded-md p-1 text-white">
                {job.employmentType}
              </div>
            </div>

            <div className="md:flex md:justify-between">
              <p>{job.location}</p>
              <p><span className="font-medium">Salary:</span>{job.salaryRange}</p>
            </div>
          </div>

          <div>
            <Link to={`/${job.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedCarts;
