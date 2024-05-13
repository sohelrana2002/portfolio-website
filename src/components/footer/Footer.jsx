import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer-logo'>David</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="##"><BsFacebook /></a>
        <a href="##"><AiFillInstagram /></a>
        <a href="##"><AiFillLinkedin /></a>
        <a href="##"><AiFillTwitterSquare /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Made By SOHEL | All Right Resserved</small>
      </div>
    </footer>
  )
}

export default Footer