import React, { createContext, useEffect, useState } from 'react';
import Hero from './Hero';
import Catagory from './Catagory';
import FeaturedJobs from './FeaturedJobs';



const Home = () => {

    return (
       <>
      
        <Hero></Hero>
        <Catagory></Catagory>
        <FeaturedJobs></FeaturedJobs>
      
       
      
       </>
    );
};

export default Home;