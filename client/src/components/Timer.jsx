import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react'

export default function Timer( {timerLeft, totalTime} ) {
    const percentage = (timerLeft/totalTime)*100
  return (
    <div className='w-20 h-20 '>
      <CircularProgressbar value={percentage} text={`${timerLeft}s`}
      styles={buildStyles({
        textSize: "28px",
        pathColor:"#10b981",
        textColor: "#ef4444",
        trailColor: "#e5e7eb"
      })}
      />
    </div>
  )
}
