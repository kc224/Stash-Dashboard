import React from 'react'
import './Rightbar.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Rightbar = () => {
  
  const revenue_data = [
    {
      name: 'JAN',
      last_year: 1200,
      this_year: 1800,
      amt: 2400,
    },
    {
      name: 'FEB',
      last_year: 1800,
      this_year: 2500,
      amt: 2400,
    },
    {
      name: 'MAR',
      last_year: 2000,
      this_year: 3100,
      amt: 2400,
    },
    {
      name: 'APR',
      last_year: 1700,
      this_year: 2800,
      amt: 2400,
    },
    {
      name: 'MAY',
      last_year: 1500,
      this_year: 2900,
      amt: 2400,
    },
    {
      name: 'JUN',
      last_year: 2600,
      this_year: 3500,
      amt: 2400,
    },
    {
      name: 'JUL',
      last_year: 2400,
      this_year: 2800,
      amt: 2400,
    },
    {
      name: 'AUG',
      last_year: 2600,
      this_year: 2500,
      amt: 2400,
    },
    {
      name: 'SEP',
      last_year: 2000,
      this_year: 2700,
      amt: 2400,
    },
    {
      name: 'OCT',
      last_year: 1400,
      this_year: 2400,
      amt: 2400,
    },
    {
      name: 'NOV',
      last_year: 2300,
      this_year: 2800,
      amt: 2400,
    },
    {
      name: 'DEC',
      last_year: 2900,
      this_year: 2800,
      amt: 2400,
    },
  ];
  
  
  return (
    <div className = "Rightbar">
      <p className = "chart-title">2022 Revenue</p>
      <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={200}
            height={100}
            data={revenue_data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="last_year" stroke="#975ddb" fill="#bf9ce9" />
          </AreaChart>
        </ResponsiveContainer>

        <br />
        <p className = "chart-title">2021 Revenue</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={revenue_data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="this_year" stroke="#5d64db" fill="#878ce4" />
          </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Rightbar