import React from 'react'
import Card from './Card'
import Cards from './Cards'


const Info = () => {
  return (
    <div className='info'>
        <div className="wrapper">
            <div className="info-wrapper">
                <Card />
                <Cards />
            </div>
        </div>
    </div>
  )
}

export default Info