import React, { createContext, useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Catagory from './Catagory';
import FeaturedJobs from './FeaturedJobs';


// export const JobsData = createContext([]);
const Home = () => {
    
    const [jobs, setJobs] = useState([]);
    // console.log(jobs);
  
    useEffect(() => {
      const url = "jobs.json";
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setJobs(json);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
    }, []);

    return (
       <div>
        {/* <JobsData.Provider value="jobs"> */}
        <Hero></Hero>
        <Catagory></Catagory>
        <FeaturedJobs jobs={jobs} key={jobs.id}></FeaturedJobs>
       
        {/* </JobsData.Provider> */}
      
       </div>
    );
};

export default Home;