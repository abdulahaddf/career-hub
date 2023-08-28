import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [jobs, setJobs] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log(jobs);
  useEffect(() => {
    fetch("https://career-server.vercel.app/career")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Filter jobs based on searchValue
  const filteredJobs = jobs.filter((college) =>
    college.companyName.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(filteredJobs);

  return (
    <div className="w-11/12 md:w-1/2 py-5 md:py-10 mx-auto z-40 relative">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm  bg-gray-50 rounded-tl-lg border-2 border-green"
            placeholder="Search for your desired job..."
            value={searchValue}
            onChange={handleInputChange}
          />

          <button className="absolute right-5 bottom-2.5 btn btn-sm btn-outline">
            Search
          </button>
        </div>
      </form>

      {/* Display filtered jobs only when there is a search value */}
      {searchValue && (
        <ul
          className={`absolute w-full bg-white border-2 border-green rounded-md max-h-60 overflow-y-auto p-2 mt-2 ${
            searchValue ? "block" : "hidden"
          }`}
        >
          {filteredJobs.map((job) => (
            <li key={job.id}>
              <Link
                to={`/${job.id}`}
                state={job}
                className="flex justify-between hover:underline hover:text-green"
              >
                {job.companyName} <FaArrowAltCircleRight />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
