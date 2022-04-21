import React from 'react'
import Card from './Card'
import Cards from './Cards'


const Info = () => {
  return (
    <div className='info'>
        <div className="wrapper">
        <p className='text-center text-blue-400 mb-4 font-semibold'>Services</p>
            <div className="info-wrapper">
                <Card />
                <Cards />
            </div>
        </div>
    </div>
  )
}

export default Info