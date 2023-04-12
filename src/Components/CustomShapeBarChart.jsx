import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Assignment 1",
    Marks: 60,
   
  },
  {
    name: "Assignment 2",
    Marks: 60,
   
  },
  {
    name: "Assignment 3",
    Marks: 60,
    
  },
  {
    name: "Assignment 4",
    Marks: 60,
    
  },
  {
    name: "Assignment 5",
    Marks: 60,
    
  },
  {
    name: "Assignment 6",
    Marks: 60,
    
  },
  {
    name: "Assignment 7",
    Marks: 60,
   
  },
  {
    name: "Assignment 8",
    Marks: 60,
    
  },
];

export default function App() {
  return (
    <div className="h-96 mb-64 mx-auto">
        <h1 className="text-5xl font-bold text-center mb-24 h-32 bg-gray-100 ">Here is the Statistics of my marks of assignment</h1>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 60,
            left: 20,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}