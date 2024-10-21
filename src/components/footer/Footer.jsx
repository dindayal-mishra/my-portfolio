import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="details">
        <h5>Contact no - 7008671181</h5>
        <h5>Email Id - dindayalmishra05@gmail.com</h5>
        </div>

        <div className="logos">
           <div className='logo1'> <FaLinkedin /></div>
            <div className="logo2"><FaGithub /></div>
            <div className="logo3"><FaInstagram /></div>
        </div>

        <div className="downloadcvbutton">
            <button><a href="./dindayalcv.pdf" download>Download CV</a></button>
        </div>
      </div>
    </div>
  )
}

export default Footer
