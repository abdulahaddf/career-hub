import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/Home'
import CustomShapeBarChart from './Components/CustomShapeBarChart';
import Blog from './Components/Blog';
import JobDetails from './Components/JobDetails';
import AppliedJobs from './Components/AppliedJobs';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    
    children: [
      { path: '/',
       element: <Home></Home>,
       loader: () => fetch('/jobs.json'),},
      { path: 'jobDetails/:id', 
      element:<JobDetails></JobDetails>,
      loader:async ({params}) => {
        const job = await fetch('/jobs.json')
        const details =await job.json()
        return details.find(detail => detail.id == params.id)
      }},
      { path: 'statistics', element: <CustomShapeBarChart></CustomShapeBarChart>  },
      { path: 'blog', element: <Blog></Blog>  },
      { path: 'appliedjobs', element: <AppliedJobs></AppliedJobs>,
      loader: () => fetch('/jobs.json'), },
     
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
  </>
)
