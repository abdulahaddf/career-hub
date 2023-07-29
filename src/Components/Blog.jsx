import React from "react";


const Blog = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center bg-gray-100 h-32">
        Welcome to my Blog
      </h1>
      <div className="grid md:grid-cols-2 gap-5 p-10">
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">When should you use context API?</h1>
          <p>

           
          </p>
        </div>
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">What is a custom hook?</h1>
          <p>
          
          </p>
        </div>
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">What is useRef?</h1>
          <p>
            
          </p>
        </div>
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">What is useMemo?</h1>
          <p>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
