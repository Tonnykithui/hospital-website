import React, { useState, useEffect } from 'react'
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {

    function getWindowSize(){
        const { innerWidth:width } = window;
        return width;
    }

    const[windowDimension, setWindowDimension] = useState(getWindowSize());

    useEffect(() => {
        function handleResize(){
            setWindowDimension(getWindowSize());
        };
        window.addEventListener("resize", handleResize);
    }, [])
    
  return (
    <div className='header wrapper'>
        <div className="header-wrap">
        <div className='logo'>
            <h1>MED</h1>
        </div>
        {
            windowDimension > 768 ? (
            <>
                <div className="menu">
                   <ul className="menu-link">
                       <li>Home</li>
                       <li>About</li>
                       <li>Services</li>
                       <li>Contact</li>
                    </ul>
                </div>
                <div className="appointment">
                   <button className='btn'>Appointment</button>
                </div>
            </>
            ) : (
                <div className='menu-icon'>
                  <BiMenuAltRight />
                </div>
            )
        }
        
        
        </div>
    </div>
  )
}

export default Header