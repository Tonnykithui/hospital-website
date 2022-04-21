import React from 'react'
import Doctor from './Doctor'

const Team = () => {
  return (
    <div className='team'>
        <p>Team</p>
        <h1>Our Doctors</h1>
        <div className="doctors-cards">
            <Doctor />
            <Doctor />
            <Doctor />
        </div>
    </div>
  )
}

export default Team