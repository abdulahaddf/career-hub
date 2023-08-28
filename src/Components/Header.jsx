import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Utils/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
          .then()
          .catch((error) => console.log(error));
      };
    return (
        <div className='md:flex mx-auto w-full text-center justify-evenly py-6 items-center bg-gray-100'>
            <div>
                {/* <h1 className='text-xl font-bold'>JobHunter</h1> */}
                <Link to="/" className='text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-teal-500 hover:to-teal-300 inline-block text-transparent bg-clip-text'>JobHunter</Link>
            </div>
            <div className='text-xl font-semibold my-2'>
                <Link to="/" className='mx-3'>Home</Link> 
                <Link to="/all" className='mx-3'>All Jobs</Link> 
                <Link to="/appliedJobs" className='mx-3'>Applied Jobs</Link> 
              
            </div>
            
            <div className="md:flex-none">
            {user ? (
              <div className="flex items-center">
                <div
                  className="relative mr-3 w-10 rounded-full tooltip tooltip-left "
                  data-tip={user?.displayName}
                >
                  <img className="rounded-full" src={user?.photoURL} />
                </div>
                <button
                  onClick={handleLogOut}
                  className="btn btn-primary"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>





    );
};

export default Header;