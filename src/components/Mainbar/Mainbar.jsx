import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Mainbar.css'
import Table from '../Table/Table'

const Mainbar = () => {

  
  return (
    <div className = "Mainbar">
      <h1 className = "label">Dashboard</h1>

      <div className="cards">
        <div className="card rev">
          <h2 className="card-title">Revenue</h2>
          <div className="progress">
            <CircularProgressbar  
              value={65}
              text={`${65}%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: 'butt',
                textSize: '1rem',
                pathColor: `white`,
                textColor: 'white',
                trailColor: 'transparent',
              })}
            />
          </div>
          <p className="number">$11,240</p>
        </div>
        <div className="card sal">
          <h2 className="card-title">Sales</h2>

          <div className="progress">
            <CircularProgressbar  
              value={89}
              text={`${89}%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: 'butt',
                textSize: '1rem',
                pathColor: `white`,
                textColor: 'white',
                trailColor: 'transparent',
              })}
            />
          </div>
          <p className="number">$23,910</p>
        </div>
        <div className="card exp">
          <h2 className="card-title">Expenses</h2>
          <div className="progress">
            <CircularProgressbar  
              value={71}
              text={`${71}%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: 'butt',
                textSize: '1rem',
                pathColor: `white`,
                textColor: 'white',
                trailColor: 'transparent',
              })}
            />
          </div>
          <p className="number">$4,050</p>
        </div>
      </div>

      <Table />
    </div>
  )
}

export default Mainbar