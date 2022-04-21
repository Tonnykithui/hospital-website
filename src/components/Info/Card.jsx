import React from 'react'
import { AiOutlineFieldTime } from "react-icons/ai";

const Card = () => {
  return (
    <>
    <div className="info-card">
        <div className="info-head">
            <h1>Opening Hours</h1>
            <AiOutlineFieldTime className='info-img'/>
        </div>
        <div className="info-det">
            <div className="weekdays">
               <h2>Week Days</h2>
               <p>8am - 9pm</p>
            </div>
            <div className="weekend">
                <h2>Weekend</h2>
                <p>9am - 6pm</p>
            </div>
        </div>            
    </div>
    </>
  )
}

export default Card