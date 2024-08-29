import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/thechip2.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img style={{width:'90px',height:'90px'}} src={footer_logo} alt=''/>
        <p>TheChip</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Officers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt=''/>
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt=''/>
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt=''/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
