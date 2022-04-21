import React from 'react'

const Speciality = () => {
  return (
    <div className='speciality'>
            <div className="speciality-items">
                <div className="speciality-wording">
                    <p className='features'>FEATURES</p>
                    <h1>Our Speciality</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corrupti delectus pariatur fuga quisquam quo!</p>
                </div>
                <div className="speciality-online-appointments">
                    <h1>Online Appointment</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum deserunt voluptates laboriosam labore, maiores eaque.</p>
                    <button>Read More</button>
                </div>
                <div className="speciality-img">
                    <img src="../.././img/doctors-together.jpg" alt="doc" />
                </div>
            </div>
    </div>
  )
}

export default Speciality