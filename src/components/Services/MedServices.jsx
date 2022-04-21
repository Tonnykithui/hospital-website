import React from 'react';
import { FaTeeth } from "react-icons/fa";
import { GiMedicines, GiNoseFront } from "react-icons/gi";
import { ImEye } from "react-icons/im";
import { FaAmbulance, FaHeartbeat } from "react-icons/fa";

const MedServices = ({ item }) => {

    let icon;
    if(item.id == 1){
        icon = <FaTeeth />
    }
    else if(item.id == 2){
        icon = <GiMedicines />
    }
    else if(item.id == 3){
        icon = <ImEye />
    }
    else if(item.id == 4){
        icon = <FaAmbulance />
    }
    else if(item.id == 5){
        icon = <FaHeartbeat />
    }
    else{
        icon = <GiNoseFront />
    }
  return (
      <>
    
            <div className='med-services' key={item.id}>
            <div className="med-services-wrap">
                <div className="med-services-img">
                    {
                        icon
                    }
                </div>
                <div className="med-services-det">
                    {item.Title}
                </div>
            </div>
            </div>
      </>
  )
}

export default MedServices

{/* <div className='med-services'>
            <div className="med-services-wrap">
                <div className="med-services-img">
                    <FaTeeth />
                </div>
                <div className="med-services-det">
                    <h2>Dental</h2>
                </div>
            </div>
            </div> */}