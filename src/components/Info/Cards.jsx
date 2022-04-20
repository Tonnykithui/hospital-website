import React, { useContext } from 'react'
import { AiOutlineFieldTime } from "react-icons/ai";
import { GlobalContext } from '../../context/GlobalContext';

const Cards = () => {

    const { card } = useContext(GlobalContext);

  return (
      <>
      {
          card.map(item => (
            <div className='info-card' key={item.id}>
                <div className="info-heading">
                <h1>{item.Title}</h1>
                <img src={item.Logo} alt='item'/>
                </div>
                <p>{item.Info}</p>
                <button className='btn'>View More</button>
            </div>
          ))
      }
      </>
  )
}

export default Cards