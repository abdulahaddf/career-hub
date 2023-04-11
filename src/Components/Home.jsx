import React, { createContext, useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Catagory from './Catagory';
import FeaturedJobs from './FeaturedJobs';


const Home = () => {
    
    // const [jobs, setJobs] = useState([]);
    // // console.log(jobs);
  
    // useEffect(() => {
    //   const url = "jobs.json";
  
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch(url);
    //       const data = await response.json();
    //       setJobs(data);
    //     } catch (error) {
    //       console.log("error", error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);

    return (
       <div>
      
        <Hero></Hero>
        <Catagory></Catagory>
        <FeaturedJobs ></FeaturedJobs>
       
      
       </div>
    );
};

export default Home;