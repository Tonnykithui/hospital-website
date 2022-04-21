import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo">
            <h1>MEDI-<span>CARE</span></h1>
        </div>
        <div className="links">
            <div className="footer-links">
                <div className="link">
                    <h2>Solutions</h2>
                    <ul className="ul-link">
                        <li>Efficieny</li>
                        <li>Scalability</li>
                        <li>Control</li>
                    </ul>
                </div>
                <div className="link">
                    <h2>Products</h2>
                    <ul className="ul-link">
                        <li>Ambulance</li>
                        <li>Response Time</li>
                        <li>Remote</li>
                    </ul>
                </div>
                <div className="link">
                    <h2>ContactUs</h2>
                    <ul className="ul-link">
                        <li>Blog</li>
                        <li>Email</li>
                        <li>Socials</li>
                    </ul>
                </div>
                <div className="link">
                    <h2>Company</h2>
                    <ul className="ul-link">
                        <li>AboutUs</li>
                        <li>NewsRoom</li>
                        <li>Reach Us</li>
                    </ul>
                </div>
            </div>
            <div className="address">
                <p>1-800-660-8640</p>
                <span>support@medi.gmail.com</span>
                <p>900-430 Avenue 24th street</p>
                <p>Nairobi, Kenya</p>
            </div>
        </div>
    </div>
  )
}

export default Footer