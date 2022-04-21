import React from 'react'
import { GrFacebookOption, GrTwitter, GrInstagram} from "react-icons/gr";

const Doctor = () => {
  return (
    <div className='doctor'>
        <div className="doctor-img">
        <img src="../.././img/francis.jpg" alt="person" />
        </div>
        
        <h2>Ben Kyaka</h2>
        <p>Senior Doctor</p>
        <div className="socials">
            <div className="soc"><GrFacebookOption /></div>
            <div className="soc"><GrTwitter /></div>
            <div className="soc"><GrInstagram /></div>
        </div>
    </div>
  )
}

export default Doctor