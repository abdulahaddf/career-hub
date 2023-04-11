import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../Utils/fakeDb";
import AppliedCarts from "./AppliedCarts";

const Appliedjobs = () => {
  const jobData = useLoaderData();

  let jobCart = [];
  const saveCart = getStoredCart();
  for (const id in saveCart) {
    const foundJob = jobData.find((job) => job.id === id);
    if (foundJob) {
      jobCart.push(foundJob);
    }
  }

  const [filtered, setFiltered] = useState(jobCart);

  const filter = (type) => {
    const update = jobCart.filter((job) => {
      return job.jobType === type;
    });
    setFiltered(update);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-24 h-32 bg-gray-100">
        Your Applied Jobs
      </h1>
      <div className="md:flex  text-center justify-end md:mr-40">
        <button
          onClick={() => filter("Remote")}
          className="btn btn-outline btn-success btn-md  rounded-md "
        >
          Remote
        </button>
        <button
          onClick={() => filter("Onsite")}
          className="btn btn-outline btn-success btn-md mx-1  rounded-md "
        >
          Onsite
        </button>
      </div>

      {filtered.map((jobs) => (
        <AppliedCarts job={jobs} key={jobs.id}></AppliedCarts>
      ))}
    </div>
  );
};

export default Appliedjobs;
