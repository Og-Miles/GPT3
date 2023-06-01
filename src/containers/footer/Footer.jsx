import React from 'react'
import './footer.css'; 
import gpt3logo from '../../assets/logo.svg'
const Footer= () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>

        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3logo} alt="logo" />
            <p>CrechterWoord K12 182 DK Alknjkcb, All RIghts Reserved</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Socials</p>
            <p>Cunters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
            
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>CrechterWoord K12 182 DK Alknjkcb</p>
            <p>234 81 3752 5589</p>
            <p>info@payme.net</p>
          </div>
        </div>
        <div className="gpt3__footer-copyright">
          <p>© 2023 GPT-3. All Rights Reserved.</p>
        </div>
      </div>
      
  )
}

export default Footer
