import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import CustomShapeBarChart from "./Components/CustomShapeBarChart";
import Blog from "./Components/Blog";
import JobDetails from "./Components/JobDetails";
import AppliedJobs from "./Components/AppliedJobs";
import AuthProvider from "./Utils/AuthProvider";
import Login from "./shared/login/login/Login";
import Register from "./shared/login/register/Register";
import AllJobs from "./Components/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://career-server.vercel.app/career"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all",
        element: <AllJobs></AllJobs>,
        loader: () => fetch("https://career-server.vercel.app/career"),
      },
      {
        path: "/:id",
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          const job = await fetch("https://career-server.vercel.app/career");
          const details = await job.json();
          return details.find((detail) => detail.id == params.id);
        },
      },
      {
        path: "statistics",
        element: <CustomShapeBarChart></CustomShapeBarChart>,
      },
      { path: "blog", element: <Blog></Blog> },
      {
        path: "appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("https://career-server.vercel.app/career"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
