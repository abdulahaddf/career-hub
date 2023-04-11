import React, { createContext, useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Catagory from './Catagory';
import FeaturedJobs from './FeaturedJobs';


const Home = () => {

    return (
       <div>
      
        <Hero></Hero>
        <Catagory></Catagory>
        <FeaturedJobs ></FeaturedJobs>
       
      
       </div>
    );
};

export default Home;