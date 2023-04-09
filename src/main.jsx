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


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    // loader: productsAndCartData,
    children: [
      { path: '/', element: <Home></Home> },
     
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
  </>
)



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <RouterProvider router={router} />
   
//   </>
// )