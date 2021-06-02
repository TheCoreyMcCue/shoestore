import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

import './footer.css';

const Footer = () => {
  return (
    <div class="footer">
      <div className="footer-links">
        <a href="https://www.facebook.com/" target="__blank"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.instagram.com/" target="__blank"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://twitter.com/?lang=en" target="__blank"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.tiktok.com/en" target="__blank"><FontAwesomeIcon icon={faTiktok} /></a>
      </div>
      <div class="footer-copyright">
      <h4>&#169; 2021 Golden Shoe</h4>
      </div>
    </div>
  )
}

export default Footer
