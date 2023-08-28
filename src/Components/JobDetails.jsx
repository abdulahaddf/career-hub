import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../Utils/realDb";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const jobs = useLoaderData();

  const {
    id,
    jobTitle,
    salaryRange,
    description,
    jobResponsibility,
    educationalRequirements,
    experience,
    contactInformation,
    logo,
  } = jobs;
  const { phone, email, address } = contactInformation;

  const notify = () => toast("Congrats! You have applied the job");

  return (
    <div>
      <div className="bg-gray-100">
        <h1 className="text-5xl font-bold text-center h-24">Job details</h1>
      </div>
      <div className="glass shadow-xl md:flex max-w-6xl mx-auto my-20 rounded-lg p-10  ">
        <div className="leading-10">
          <div className="w-96 mx-auto my-5">
            <img src={logo} alt="" />
          </div>

          <h1>
            <span className="font-bold text-lg">Job Description:</span>
            {description}
          </h1>
          <h1>
            <span className="font-bold text-lg">Job Responsibility:</span>
            {jobResponsibility}
          </h1>
          <h1>
            <span className="font-bold text-lg">Educational Requirements:</span>
            {educationalRequirements}
          </h1>
          <h1>
            <span className="font-bold text-lg">Experience:</span>
            {experience}
          </h1>
        </div>
        <div className="p-4 m-4 bg-cyan-200 rounded-md ">
          <div className="border-y-2 border-cyan-300 leading-8 py-2">
            <h1 className="font-bold text-lg">Job Details</h1>
            <p>
              <span className="text-md font-semibold">Salary: </span>{" "}
              {salaryRange}
            </p>
            <p>
              {" "}
              <span className="text-md font-semibold">Job Title: </span>
              {jobTitle}
            </p>
          </div>
          <div className="my-3">
            <h1 className="font-bold text-lg my-2">Contact Information</h1>
            <p>
              {" "}
              <span className="text-md font-semibold">Phone: </span>
              {phone}
            </p>
            <p>
              {" "}
              <span className="text-md font-semibold">Email: </span>
              {email}
            </p>
            <p>
              {" "}
              <span className="text-md font-semibold">Address: </span>
              {address}
            </p>
          </div>
          <div onClick={notify} className="mx-auto w-fit">
            <button onClick={() => addToDb(id)} className="btn btn-primary">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default JobDetails;
