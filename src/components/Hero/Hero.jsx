import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <div className="hero-wrap">
                <div className="hero-wording">
                    <h1>Healthcare solutions</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel tempore maxime impedit hic vero numquam ad tempora beatae doloremque dolore.</p>
                    <button className='btn'>Read More</button>
                </div>
                <div className="hero-img">
                    {/* <div className="large"></div> */}
                    <div className="img-medicine">
                        <img src="../.././img/medicine.svg" alt="" />
                    </div>
                    {/* <div className="small"></div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero