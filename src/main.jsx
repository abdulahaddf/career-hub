import React from 'react'
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


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    // loader: productsAndCartData,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/statistics', element: <CustomShapeBarChart></CustomShapeBarChart>  },
      { path: '/blog', element: <Blog></Blog>  },
      { path: '/jobDetails', element:<JobDetails></JobDetails>  },
     
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
  </>
)
