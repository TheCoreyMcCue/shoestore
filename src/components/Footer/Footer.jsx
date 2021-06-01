import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons'

import './footer.css';

const Footer = () => {
  return (
    <div class="footer">
      <div className="footer-links">
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
      </div>
      <div class="footer-copyright">
      <h4>&#169; 2021 Golden Shoe</h4>
      </div>
    </div>
  )
}

export default Footer
