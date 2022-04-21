import React from 'react'

const Appointment = () => {
  return (
    <div className='Appointment bg-slate-100'>
        <div className="calendar">
            <img src="../.././img/calendar.svg" alt="calendar" />
        </div>
        <div className="Appointment-wording">
            <h1>Appointment Schedules</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos necessitatibus voluptas quam. Beatae dignissimos unde cupiditate repudiandae laudantium eaque.</p>
            <button className='Appointment-btn'>Schedule</button>
        </div>
    </div>
  )
}

export default Appointment