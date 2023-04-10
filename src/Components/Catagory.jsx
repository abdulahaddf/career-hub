import React, { useEffect, useState } from "react";

const Catagory = () => {
  const [catagories, setCatagory] = useState([]);
  // console.log(catagories);

  useEffect(() => {
    const url = "catagories.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCatagory(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-fit text-center mx-auto my-5 md:my-20">
      <h1 className="title">Job Category List</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:flex">
        {catagories.map((cat) => 
            <div className="card w-64 bg-base-100 shadow-xl mr-4 my-5 text-center">
            <figure>
              <img
                src={cat.picture}
                alt="picture"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {cat.title}
              </h2>
              <p>{cat.details}</p>
              
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Catagory;
