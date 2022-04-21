import React, { useContext } from 'react'
import MedServices from './MedServices'
import { GlobalContext } from '../../context/GlobalContext';

const Services = () => {
    const { services } = useContext(GlobalContext);
  return (
    <div className='services'>
        <div className="services-wrap">
            <div className="services-display">
                {
                    services.map(item => (
                        <MedServices item={item}/>
                    ))
                }
            </div>
            <div className="services-info">
                <div className='services-info-img'>
                    <img src="../.././img/teeth.svg" alt="" />
                </div>
                <div className="services-info-det">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cumque. Assumenda fuga, et optio magni dolor quibusdam natus unde vero.</p>
                    <button className='services-btn'>Book Appointment</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services